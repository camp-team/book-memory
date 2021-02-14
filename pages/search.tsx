import Layout from '../components/Layout';
import BookCard from '../components/BookCard';

export default function Search() {
  return (
    <Layout>
      <div className='py-7 px-4'>
        <form className='flex flex-grow w-full'>
          <input
            type='text'
            className='w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='本のタイトルを入力してください'
          />
          <button className='w-20 text-white bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-md'>
            検索
          </button>
        </form>
        　
        <div className='pt-8'>
          <p>検索結果</p>
          <div className='grid grid-cols-2 gap-4 bg-grey-light py-8 w-full @screen sm:grid-cols-4'>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}
