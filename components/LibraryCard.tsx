import React, { ChangeEvent, useEffect, useState } from 'react';
import LibraryMemory from '../components/LibraryMemory';
import BookMoreVert from './BookMoreVart';
import { addMemory, useMemory } from '../utils/memory';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useRouter } from 'next/router';

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
  // Snackbar表示用（メモリー上限オーバーアラート）
  const router = useRouter();
  const [openSnackbarMemoryOver, setOpenSnackbarMemoryOver] = useState(false);
  const closeSnackbarMemoryOver = () => {
    setOpenSnackbarMemoryOver(false);
  };

  //リアルタイムの本のメモリーを取得
  const memories = useMemory(bid);
  //入力メモリーのステイト
  const [input, setInput] = useState('');
  //メモリー入力中関数
  const onChangeInput: any = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  // ウェルカムのサンプル用メモリー
  const [welcomeMemory, setWelcomeMemory] = useState([
    `◆第1の習慣「主体的である」
  ・自分の人生の責任を引き受けるということ
  ・自分がコントロールできる事柄に集中し自発的に行動することで、自分の人生を内側から変えていくことが可能になる`,
    `◆第2の習慣「終わりを思い描くことから始める」
    ・人生の最後の姿を思い描きながら、自分自身をどう創り上げたいかを決めること
    ・自分の行動の基礎となる価値観や原則を文章化してみる`,
    `◆第3の習慣「最優先事項を優先する」
    ・「緊急ではないけれど重要なこと」を優先して行う
    ・↑の取組は自分自身の成長につながる活動であることが多く、優先して取り組むことで活躍のチャンスを増やすことができる`,
    `◆第4の習慣「Win-Winを考える」
    ・全ての人間関係で自分も相手も利益になることを考えること
    ・関わった人との間に信頼が積み重なり、ビジネスをする上でも協力を得やすくなる`,
    `◆第5の習慣「まず理解に徹し、そして理解される」
    ・相手の考えや思いをじっくり聞き、相手の考えを理解してから自分の考えを伝える、その繰り返しで相互理解が深くなる`,
    `◆第6の習慣「シナジーを作り出す」
    ・シナジーとは全体の合計が個々の総和より大きくなることを指し、1+1の結果が2よりも大きくなるような状態`,
    `◆第7の習慣「刃を研ぐ」
    ・人間には肉体、精神、知性、社会、情緒という5つの刃があり、これらを日頃からバランスよく磨いていくことが大切`,
  ]);

  const onWelcomeUpdateMemory = (welcomeMemories: any) => {
    setWelcomeMemory([...welcomeMemories]);
  };

  //メモリーの上限(1000文字)監視フック
  useEffect(() => {
    input.length > 1000
      ? setOpenSnackbarMemoryOver(true)
      : setOpenSnackbarMemoryOver(false);
  }, [input.length]);
  //メモリー追加関数
  const onClickMemoryAdd: VoidFunction = () => {
    if (input === '') return;
    if (router.pathname === '/library') {
      memories.push(input);
      addMemory(bid, memories);
    } else {
      onWelcomeUpdateMemory([...welcomeMemory, input]);
    }

    setInput('');
  };

  return (
    <div className='p-1 flex flex-col bg-blue-100 rounded w-full shadow hover:shadow-md duration-4'>
      <div className='group relative p-1 flex flex-col'>
        <div className='flex'>
          <img
            src={imgUrl}
            alt='Some image'
            className='w-16 flex self-center shadow-lg'
          />
          <p className='ml-2 p-1 h-20 font-medium text-base text-left line-clamp-3'>
            {title}
          </p>
        </div>
        <div className='ml-2 absolute top-0 right-0'>
          {router.pathname === '/library' && <BookMoreVert bid={bid} />}
        </div>
      </div>
      <form className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
        <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
          <LibraryMemory
            bid={bid}
            input={input}
            onChange={onChangeInput}
            onClick={onClickMemoryAdd}
            onWelcomeUpdateMemory={onWelcomeUpdateMemory}
            memories={router.pathname === '/library' ? memories : welcomeMemory}
          />
        </ul>
      </form>

      <Snackbar open={openSnackbarMemoryOver} onClose={closeSnackbarMemoryOver}>
        <Alert severity='error'>
          １レコードの上限(1000文字)をオーバーしました
        </Alert>
      </Snackbar>
    </div>
  );
};
export default LibraryCard;
