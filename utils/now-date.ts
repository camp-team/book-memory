import { format } from 'date-fns';

export const nowDate = () => {
  const now = new Date();
  return format(now, 'yyyy-MM-dd HH:mm:ss');
};
