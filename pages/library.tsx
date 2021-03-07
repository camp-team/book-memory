import Layout from '../components/Layout';
import LibraryCard from '../components/LibraryCard';
import React from 'react';

export default function Library() {
  const books = [
    {
      id: 0,
      imgUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51srrwLATIL._SX390_BO1,204,203,200_.jpg',
      title: '1冊ですべて身につくHTML & CSSとWebデザイン入門講座',
      texts: [],
    },
    {
      id: 1,
      imgUrl: 'https://m.media-amazon.com/images/I/41i89jqMyPL.jpg',
      title: 'なるほどデザイン',
      texts: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quam quidem laborum, quae impedit laboriosam dolore nemorecusandae, iusto blanditiis soluta omnis hic magni sit? Expedita!',
        'Quo officia perspiciatis accusamus aliquam repellendus optio vel ipsum cupiditate tenetur hic voluptate fugit laudantium quod aliquid itaque quasi enim, dicta ducimus.',
      ],
    },
    {
      id: 2,
      imgUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51ekcrVqOSL._SX350_BO1,204,203,200_.jpg',
      title: 'キタミ式イラストIT塾 基本情報技術者 令和03年',
      texts: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quam quidem laborum, quae impedit laboriosam dolore nemorecusandae, iusto blanditiis soluta omnis hic magni sit? Expedita!',
        'Quo officia perspiciatis accusamus aliquam repellendus optio vel ipsum cupiditate tenetur hic voluptate fugit laudantium quod aliquid itaque quasi enim, dicta ducimus.',
        'laudantium quod aliquid itaque quasi enim, dicta ducimus.',
      ],
    },
  ];

  return (
    <Layout>
      <div className='py-16 px-2'>
        <h2 className='pt-8 text-center font-bold'>📚 マイライブラリ 📚</h2>
        <div className='grid gap-4 bg-grey-light p-4 w-full'>
          {books &&
            books.map((book) => (
              <div key={book.id}>
                <LibraryCard
                  bid={book.id}
                  imgUrl={book.imgUrl}
                  title={book.title}
                  texts={book.texts}
                ></LibraryCard>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
