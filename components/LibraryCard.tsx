import * as React from 'react';
import LibraryMemory from '../components/LibraryMemory';

type Props = {
  bid: number;
  imgUrl: string;
  title: string;
};

const textMemories = [
  {
    id: 0,
    texts: [],
  },
  {
    id: 1,
    texts: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quam quidem laborum, quae impedit laboriosam dolore nemorecusandae, iusto blanditiis soluta omnis hic magni sit? Expedita!',
      'Quo officia perspiciatis accusamus aliquam repellendus optio vel ipsum cupiditate tenetur hic voluptate fugit laudantium quod aliquid itaque quasi enim, dicta ducimus.',
    ],
  },
  {
    id: 2,
    texts: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quam quidem laborum, quae impedit laboriosam dolore nemorecusandae, iusto blanditiis soluta omnis hic magni sit? Expedita!',
      'Quo officia perspiciatis accusamus aliquam repellendus optio vel ipsum cupiditate tenetur hic voluptate fugit laudantium quod aliquid itaque quasi enim, dicta ducimus.',
      'laudantium quod aliquid itaque quasi enim, dicta ducimus.',
    ],
  },
];

const LibraryCard = ({ bid, imgUrl, title }: Props) => (
  <div className='p-1 flex flex-col bg-white rounded w-full shadow hover:shadow-md duration-4'>
    <div className='relative p-1 flex'>
      <img
        src={imgUrl}
        alt='Some image'
        className='w-8 flex self-center shadow-lg'
      />
      <p className='p-1 font-bold text-sm'>{title}</p>
      <a href='#' className='ml-2 flex-shrink-0'>
        <img
          src='/images/dots.svg'
          alt=''
          className='w-4 rounded-md absolute top-0 right-0 opacity-30'
        />
      </a>
    </div>
    <form className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
      <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
        {textMemories.map(
          (textMemory) =>
            bid === textMemory.id && (
              <div key={textMemory.id}>
                <LibraryMemory texts={textMemory.texts} />
              </div>
            )
        )}
      </ul>
    </form>
  </div>
);
export default LibraryCard;
