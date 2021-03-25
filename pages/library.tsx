import Layout from '../components/Layout';
import LibraryCard from '../components/LibraryCard';
import React from 'react';
import { useCollection } from '@nandorojo/swr-firestore';
import { fuego } from '../utils/firebase';

export default function Library() {
  const currentUser = fuego.auth().currentUser;
  const { data } = useCollection(`users/${currentUser?.uid}/books`, {
    listen: true,
  });

  if (!data) return <Layout>loading</Layout>;
  return (
    <Layout>
      <div className='py-16 px-2'>
        <h2 className='pt-8 text-center font-bold'>📚 マイライブラリ 📚</h2>
        <div className='grid gap-4 bg-grey-light p-4 w-full'>
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
        </div>
      </div>
    </Layout>
  );
}
