import Layout from '../components/Layout';
import LibraryCard from '../components/LibraryCard';
import React from 'react';

export default function Library() {
  const books = [
    {
      id: 0,
      imgUrl: 'https://picsum.photos/25/40',
      title: 'A Lorem ipsum dolor sit amet.',
    },
    {
      id: 1,
      imgUrl: 'https://picsum.photos/25/40',
      title: 'B Lorem ipsum dolor sit amet.',
    },
    {
      id: 2,
      imgUrl: 'https://picsum.photos/25/40',
      title: 'C Lorem ipsum dolor sit amet.',
    },
  ];

  return (
    <Layout>
      <div className='py-16 px-2'>
        <h2 className='pt-8'>マイライブラリ</h2>
        <div className='grid gap-4 bg-grey-light p-4 w-full'>
          {books &&
            books.map((book) => (
              <div key={book.id}>
                <LibraryCard
                  bid={book.id}
                  imgUrl={book.imgUrl}
                  title={book.title}
                ></LibraryCard>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
