import { GoogleBook } from '../interfaces/Book';

export const searchBooks = async (bookTitle: string | string[]) => {
  if (!bookTitle) return;
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`
  );
  if (!res) return;
  const bookJson = await res.json();
  const bookData: GoogleBook[] = await bookJson.items.map((data: any) => {
    const item = data.volumeInfo;
    const book: GoogleBook = {
      bid: data.id,
      title: item.title,
      imageUrl: item.imageLinks
        ? item.imageLinks.smallThumbnail
        : '/images/book-no-image.jpg',
    };
    return book;
  });
  return bookData;
};
