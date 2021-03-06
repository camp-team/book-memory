import React, { useEffect, useState } from 'react';
import LibraryMemory from '../components/LibraryMemory';
import MoreVar from '../components/MoreVer';

type Props = {
  bid: number;
  imgUrl: string;
  title: string;
  texts: string[];
};

const LibraryCard = ({ bid, imgUrl, title, texts }: Props) => {
  const onBookDelete = () => {};
  const [input, setInput] = useState('');
  const [memories, setMemory] = useState(texts);
  const onChangeInput: any = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    console.log(typeof event.target);
  };
  //記録追加関数
  const onClickMemoryAdd: VoidFunction = () => {
    if (input === '') return;
    const newText = [...memories, input];
    setMemory(newText);
    setInput('');
  };

  useEffect(() => {
    console.log(memories);
  });

  return (
    <div className='p-1 flex flex-col bg-blue-100 rounded w-full shadow hover:shadow-md duration-4'>
      <div className='group relative p-1 flex flex-col'>
        <img
          src={imgUrl}
          alt='Some image'
          className='w-16 flex self-center shadow-lg'
        />
        <p className='p-2 font-semibold text-sm text-center'>{title}</p>
        <div className='ml-2 absolute top-0 right-0'>
          <MoreVar
            onFunctions={[onBookDelete]}
            children={['ライブラリから削除']}
          />
        </div>
      </div>
      <form className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
        <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
          <LibraryMemory
            input={input}
            onChange={onChangeInput}
            onClick={onClickMemoryAdd}
            memories={memories}
          />
        </ul>
      </form>
    </div>
  );
};
export default LibraryCard;
