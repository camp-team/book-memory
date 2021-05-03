import Layout from '../components/Layout';
import { LibraryCard } from '../components/LibraryCard';
import React from 'react';
import { useCollection, useDocument } from '@nandorojo/swr-firestore';
import { fuego } from '../utils/firebase';
import { BookCount } from '../interfaces/Book';

const limit = 10;

export default function Library() {
  //ユーザー取得
  const currentUser = fuego.auth().currentUser;
  //ライブラリ登録カウント取得
  const { data: count }: BookCount = useDocument(`users/${currentUser?.uid}`, {
    listen: true,
  });
  const { data: bookdata, mutate } = useCollection(
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
    if (!bookdata?.length) return;
    const ref = fuego.db
      .collection(`users/${currentUser?.uid}/books`)
      .orderBy('createdat', 'desc');
    const startAfterDocument = bookdata[bookdata.length - 1].__snapshot;
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
    mutate((state) => [...state![Symbol.iterator](), ...moreDocs], false);
  };
  if (bookdata?.length === 0)
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
          <h1 className="pb-2 text-center text-lg font-bold md:text-2xl">
            マイライブラリ
          </h1>
          <p className="pb-2 text-center">
            全体件数 {count?.bookCount} 件 （内 {bookdata?.length} 件 表示）
          </p>
          <div className="grid gap-4 bg-grey-light p-2 w-full">
            {bookdata &&
              bookdata.map((book: any) => (
                <div key={book.id}>
                  <LibraryCard
                    bid={book.id}
                    imgUrl={book.imgUrl}
                    title={book.name}
                  ></LibraryCard>
                </div>
              ))}
            {count?.bookCount! > bookdata?.length! ? (
              <button
                onClick={paginate}
                className="mt-8 bg-gray-200 mx-auto py-4 px-8 rounded-full flex justify-center focus:outline-none"
              >
                さらに表示
              </button>
            ) : (
              <p className="pt-8 text-center text-gray-400">
                これ以上はありません
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
