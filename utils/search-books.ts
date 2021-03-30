import { Book } from '../interfaces/Book';

export const searchBooks = async (bookTitle: string) => {
  if (!bookTitle) return;
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`
  );
  if (!res) return;
  const bookJson = await res.json();
  const bookData: Book[] = await bookJson.items.map((data: any) => {
    const item = data.volumeInfo;
    const book: Book = {
      bid: data.id,
      title: item.title,
      imgUrl: item.imageLinks ? item.imageLinks.smallThumbnail : '',
    };
    return book;
  });
  return bookData;
};
