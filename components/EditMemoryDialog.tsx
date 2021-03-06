import React, { ChangeEventHandler } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

type Props = {
  open: boolean;
  onClickEditMemory: (index: number) => void;
  onChangeEditMemory: ChangeEventHandler<HTMLTextAreaElement>;
  handleclose: VoidFunction;
  memoryIndex: number;
  editInput: string;
};

export const EditMemoryDialog = ({
  open,
  onClickEditMemory,
  onChangeEditMemory,
  handleclose,
  editInput,
  memoryIndex,
}: Props) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleclose}
        aria-labelledby="form-dialog-title"
        maxWidth="lg"
        scroll="body"
        fullWidth={true}
      >
        <DialogContent>
          <TextField
            id="outlined-multiline-static"
            label="必須入力です"
            multiline
            rows={8}
            onChange={onChangeEditMemory}
            value={editInput}
            variant="outlined"
            size="medium"
            fullWidth={true}
          />
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleclose}
            className="bg-gray-200 p-2 mr-1 rounded-md focus:outline-none"
          >
            キャンセル
          </button>
          <button
            onClick={() => {
              onClickEditMemory(memoryIndex);
            }}
            className="bg-green-500 text-white p-2 mr-1 rounded-md focus:outline-none "
          >
            更新
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
