import Layout from '../components/Layout';
import BookCard from '../components/BookCard';
import { useRouter } from 'next/router';
import { searchBooks } from '../utils/search-books';
import { useEffect, useState } from 'react';
import { Book } from '../interfaces/Book';

export default function Search() {
  const router = useRouter();
  //検索ヘッダの本のタイトルを取得
  const booktitle: any = router.query.booktitle; //検索結果の保管ステート
  const [bookList, setBookList] = useState<Book[]>([]);
  //本検索処理　ヘッダが検索される都度処理発生
  useEffect(() => {
    booktitle &&
      searchBooks(booktitle).then((books: Book[] | undefined) => {
        books && setBookList(books);
      });
  }, [booktitle]);
  return (
    <Layout>
      <div className="pt-20 text-center bg-blue-100">
        　<p className="font-bold text-2xl">検索結果</p>
        <div className="container mx-auto grid grid-cols-2 gap-2 py-8 md:grid-cols-4 md:gap-4">
          {bookList &&
            bookList.map((book: Book, idx) => (
              <div key={idx}>
                <BookCard
                  bid={book.bid}
                  imgUrl={book.imgUrl}
                  title={book.title}
                />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
