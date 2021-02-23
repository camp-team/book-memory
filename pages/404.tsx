import Link from 'next/link';
import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout>
      <div className='my-52 text-center'>
        <h1>404 - Page Not Found</h1>
        <p>お探しのページは見つかりませんでした</p>
        <Link href='/'>
          <button className='mt-4 bg-blue-600  whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-blue-500'>
            トップへ戻る
          </button>
        </Link>
      </div>
    </Layout>
  );
}
