import Layout from '../components/Layout';
import BookCard from '../components/BookCard';
import { books } from '../utils/search-books';

export default function Search() {
  return (
    <Layout>
      <div className='container mx-auto pt-20 text-center'>
        　<p>検索結果</p>
        <div className='grid grid-cols-2 gap-2 py-8 md:grid-cols-4 md:gap-4'>
          {books.map((book: any, idx) => (
            <div key={idx}>
              <BookCard bid={book.id} imgUrl={book.imgUrl} title={book.title} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
