import React, { useEffect, useState } from 'react';
import MemoryMoreVart from './MemoryMoreVart';
import IconButton from '@material-ui/core/IconButton';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Tooltip from '@material-ui/core/Tooltip';

type Props = {
  bid: string;
  input: string;
  onChange: VoidFunction;
  onClick: VoidFunction;
  onWelcomeUpdateMemory: any;
  memories?: string[];
};

const LibraryMemory = ({
  bid,
  input,
  onChange,
  onClick,
  memories,
  onWelcomeUpdateMemory,
}: Props) => {
  //メモリー数上限監視フック
  const [maxMemoryFlg, setMaxMemoryFlg] = useState(false);
  useEffect(() => {
    memories && memories.length >= 20
      ? setMaxMemoryFlg(true)
      : setMaxMemoryFlg(false);
  }, [memories?.length]);

  return (
    <>
      {memories &&
        memories.map((memory, index) => (
          <li key={index} className="group items-center text-sm cursor-pointer">
            <div className="flex p-1 bg-white border-gray-100 rounded-md">
              <p className="pl-2 rounded-md flex-1 bg-white whitespace-pre-line break-all">
                {memory}
              </p>

              <MemoryMoreVart
                bid={bid}
                memoryIndex={index}
                memories={memories && memories}
                onWelcomeUpdateMemory={onWelcomeUpdateMemory}
              />
            </div>
          </li>
        ))}
      <li className="items-center text-sm flex relative rounded-md bg-white">
        {!maxMemoryFlg ? (
          <>
            <TextareaAutosize
              rowsMin={2}
              placeholder="メモを入力する"
              value={input}
              wrap="hard"
              onChange={onChange}
              className="ml-2 mr-6 p-1 rounded-md flex-1 resize-none focus:outline-none"
            ></TextareaAutosize>

            <div className="ml-2 absolute bottom-0 right-0 ">
              <Tooltip title="登録" arrow>
                <IconButton
                  className="focus:outline-none"
                  size="small"
                  style={input ? { color: 'limegreen' } : { color: 'gray' }}
                  disabled={!input}
                  onClick={onClick}
                >
                  <SendSharpIcon fontSize="default" />
                </IconButton>
              </Tooltip>
            </div>
          </>
        ) : (
          <div className="mx-auto text-center text-gray-500">
            １冊の上限(20レコード)に達しました
          </div>
        )}
      </li>
    </>
  );
};
export default LibraryMemory;
