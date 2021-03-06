import React from 'react';
import MoreVar from '../components/MoreVer';
import IconButton from '@material-ui/core/IconButton';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
type Props = {
  input: string;
  onChange: VoidFunction;
  onClick: VoidFunction;
  memories?: string[];
};

const LibraryMemory = ({ input, onChange, onClick, memories }: Props) => {
  const onMemoryEdit = () => {};
  const onMemoryDelete = () => {};

  return (
    <>
      {memories &&
        memories.map((memory, index) => (
          <li
            key={index}
            className='group px-4 items-center text-sm cursor-pointer'
          >
            <div className='flex p-1 bg-white border-gray-100 rounded-md'>
              <p className='pl-3 rounded-md flex-1 bg-white whitespace-pre-line break-all'>
                {memory}
              </p>

              <MoreVar
                onFunctions={[onMemoryEdit, onMemoryDelete]}
                children={['編集', '削除']}
              />
            </div>
          </li>
        ))}
      <li className='mx-4 items-center text-sm flex relative rounded-md bg-white'>
        <textarea
          wrap='hard'
          value={input}
          onChange={onChange}
          placeholder='入力する'
          className='ml-3 mr-7 p-1 rounded-md flex-1 resize-none focus:outline-none'
        ></textarea>

        <div className='ml-2 absolute bottom-0 right-0 '>
          <IconButton
            className='focus:outline-none'
            size='small'
            style={{ color: 'green' }}
            onClick={onClick}
          >
            <CheckOutlinedIcon fontSize='small' className='text-sm' />
          </IconButton>
        </div>
      </li>
    </>
  );
};
export default LibraryMemory;
