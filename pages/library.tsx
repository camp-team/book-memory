import Layout from '../components/Layout';
import LibraryCard from '../components/LibraryCard';
import React, { useState } from 'react';
import { useCollection } from '@nandorojo/swr-firestore';
import { fuego } from '../utils/firebase';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const limit = 10;

// Snacbar表示用↓
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Library() {
  // Snackbar表示用（メモリー上限オーバーアラート）
  const [isSnackbarNoMoreBook, setIsSnackbarNoMoreBook] = useState(false);
  const closeSnackbarNoMoreBook = () => {
    setIsSnackbarNoMoreBook(false);
  };
  const openSnackbarNoMoreBook = () => {
    setIsSnackbarNoMoreBook(true);
  };

  const currentUser = fuego.auth().currentUser;
  const { data, mutate } = useCollection(
    `users/${currentUser?.uid}/books`,
    {
      limit,
      ignoreFirestoreDocumentSnapshotField: false,
      listen: true,
      orderBy: ['createdat', 'desc'],
    },
    {
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshWhenOffline: false,
      refreshInterval: 0,
    }
  );

  const paginate = async () => {
    if (!data?.length) return;
    const ref = fuego.db.collection(`users/${currentUser?.uid}/books`);
    const startAfterDocument = data[data.length - 1].__snapshot;
    const moreDocs = await ref
      .startAfter(startAfterDocument)
      .limit(limit)
      .get()
      .then((d) => {
        const docs: any = [];
        d.docs.forEach((doc) =>
          docs.push({ ...doc.data(), id: doc.id, __snapshot: doc })
        );
        return docs;
      });
    moreDocs.length || openSnackbarNoMoreBook();
    mutate((state) => [...state![Symbol.iterator](), ...moreDocs], false);
  };
  if (data?.length === 0)
    return (
      <Layout>
        <div className="py-20 text-center text-gray-500">
          <p>ライブラリに本はありません</p>
          <p>本を検索してライブラリに登録してください</p>
        </div>
      </Layout>
    );
  return (
    <Layout>
      <div className="bg-blue-50">
        <div className="container mx-auto py-16 px-2">
          <p className="py-4 text-center text-5xl md:pt-8 md:text-7xl">📚</p>
          <h1 className="pb-4 text-center text-lg font-bold md:text-2xl">
            マイライブラリ
          </h1>
          <div className="grid gap-4 bg-grey-light p-2 w-full">
            {data &&
              data.map((book: any) => (
                <div key={book.id}>
                  <LibraryCard
                    bid={book.id}
                    imgUrl={book.imgUrl}
                    title={book.name}
                  ></LibraryCard>
                </div>
              ))}
            <button
              onClick={paginate}
              className="mt-8 bg-gray-200 mx-auto py-4 px-8 rounded-full flex justify-center focus:outline-none"
            >
              さらに表示
            </button>
          </div>
          <Snackbar
            open={isSnackbarNoMoreBook}
            onClose={closeSnackbarNoMoreBook}
            autoHideDuration={3000}
          >
            <Alert severity="error">これ以上はありません</Alert>
          </Snackbar>
        </div>
      </div>
    </Layout>
  );
}
