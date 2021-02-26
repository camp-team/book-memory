import * as React from 'react';
import MoreVar from '../components/MoreVer';
type Props = {
  texts?: string[];
};

const LibraryMemory = ({ texts }: Props) => {
  const onMemoryEdit = () => {};
  const onMemoryDelete = () => {};

  return (
    <>
      {texts &&
        texts.map((text) => (
          <li
            key={text}
            className='group p-1 items-center text-sm cursor-pointer'
          >
            <div className='flex p-1 border-b-2 bg-white border-gray-100 rounded-md'>
              <p className='ml-1 rounded-md flex-1 bg-white whitespace-pre-line break-all'>
                {text}
              </p>

              <MoreVar
                onFunctions={[onMemoryEdit, onMemoryDelete]}
                children={['編集', '削除']}
              />
            </div>
          </li>
        ))}
      <li className='p-2 items-center text-sm'>
        <div className='flex relative'>
          <textarea
            wrap='hard'
            placeholder='入力する'
            className='ml-2 mr-6 flex-1 resize-none focus:outline-none'
          ></textarea>

          <a href='#' className='flex-shrink-0 absolute bottom-0 right-0'>
            <img src='/images/check.svg' alt='' className='w-4' />
          </a>
        </div>
      </li>
    </>
  );
};
export default LibraryMemory;
