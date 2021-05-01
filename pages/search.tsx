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
      <div className="pt-16 text-center bg-blue-100">
        <p className="py-4 text-center text-5xl md:pt-8 md:text-7xl">🔎</p>
        <h1 className="pb-1 text-center text-lg font-bold md:text-2xl tracking-widest">
          検索結果
        </h1>
        <p>（上位10件を表示）</p>
        {bookList?.length ? (
          <div className="container mx-auto grid grid-cols-2 gap-1 py-8 md:grid-cols-4 md:gap-4">
            {bookList.map((book: Book, idx) => (
              <div key={idx}>
                <BookCard
                  bid={book.bid}
                  imgUrl={book.imgUrl}
                  title={book.title}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-10">本は見つかりませんでした</p>
        )}
      </div>
    </Layout>
  );
}
