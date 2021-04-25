export const nowDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = ('00' + (now.getMonth() + 1)).slice(-2);
  const date = ('00' + now.getDate()).slice(-2);
  const hour = ('00' + now.getHours()).slice(-2);
  const min = ('00' + now.getMinutes()).slice(-2);
  const sec = ('00' + now.getSeconds()).slice(-2);
  return year + month + date + hour + min + sec;
};
