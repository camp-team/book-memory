import * as React from 'react';

type Props = {
  texts?: string[];
};

const textAreaHeightSet = () => {};

const LibraryMemory = ({ texts }: Props) => (
  <>
    {texts &&
      texts.map((text) => (
        <li key={text} className='p-1 items-center text-sm'>
          <div className='flex p-1 border-b-2 border-gray-100 rounded-md'>
            <p
              className='ml-1 rounded-md flex-1 resize-none bg-white'
              onInput={textAreaHeightSet}
            >
              {text}
            </p>

            <div className='ml-2 flex flex-col relative'>
              <a href='#' className='pb-1 flex-shrink-0' id='options-menu'>
                <img src='/images/dots.svg' alt='' className='w-4 opacity-30' />
              </a>
            </div>
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
export default LibraryMemory;
