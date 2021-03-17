import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

type Props = {
  open: boolean;
  onClickEditMemory: any;
  onChangeEditMemory: any;
  handleClose: VoidFunction;
  memoryIndex: number;
  editInput: string;
};

const EditMemoryDialog = ({
  open,
  onClickEditMemory,
  onChangeEditMemory,
  handleClose,
  editInput,
  memoryIndex,
}: Props) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        maxWidth='lg'
        scroll='body'
        fullWidth={true}
      >
        <DialogContent>
          <TextField
            id='outlined-multiline-static'
            label='編集'
            multiline
            rows={8}
            onChange={onChangeEditMemory}
            value={editInput}
            variant='outlined'
            size='medium'
            fullWidth={true}
          />
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleClose}
            className='bg-gray-200 p-2 mr-1 rounded-md '
          >
            キャンセル
          </button>
          <button
            onClick={() => {
              onClickEditMemory(memoryIndex);
            }}
            className='bg-green-500 text-white p-2 mr-1 rounded-md '
          >
            更新
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default EditMemoryDialog;
