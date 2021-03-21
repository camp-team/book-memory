import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import LibraryMemory from '../components/LibraryMemory';
import MoreVar from './MoreVar';
import { addMemory, useMemory } from '../utils/memory';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

type Props = {
  bid: string;
  imgUrl: string;
  title: string;
};

// Snacbar表示用↓
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const LibraryCard = ({ bid, imgUrl, title }: Props) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const closeSnackbar = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  const actions = [
    {
      label: 'ライブラリ削除',
      function: () => {},
    },
  ];
  const memories = useMemory(bid);
  //入力メモリーのステイト
  const [input, setInput] = useState('');
  //メモリー入力中関数
  const onChangeInput: any = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  //メモリーの上限(1000文字)監視フック
  useEffect(() => {
    if (input.length > 1000) {
      setOpenSnackbar(true);
    }
  });
  //メモリー追加関数
  const onClickMemoryAdd: VoidFunction = () => {
    if (input === '') return;
    memories.push(input);
    addMemory(bid, memories);
    setInput('');
  };

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
          <MoreVar actions={actions} />
        </div>
      </div>
      <form className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
        <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
          <LibraryMemory
            bid={bid}
            input={input}
            onChange={onChangeInput}
            onClick={onClickMemoryAdd}
            memories={memories}
          />
        </ul>
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={closeSnackbar}
      >
        <Alert severity='error'>
          １レコードの上限(1000文字)をオーバーしました
        </Alert>
      </Snackbar>
    </div>
  );
};
export default LibraryCard;
