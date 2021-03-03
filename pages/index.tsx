import Layout from '../components/Layout';
import LoginDialogButton from '../components/LoginDialogButton';

const IndexPage = () => {
  return (
    <Layout title='ブックメモリー'>
      <div className='max-w-screen-sm mx-auto pt-16'>
        <section className='py-7 px-6 text-center'>
          <h1 className='text-3xl m-0 p-0 font-bold text-center'>
            ブックメモリー
          </h1>
          <p className='text-xl mt-2 p-0 font-semibold text-center'>
            〜あなたの読書を忘れないで〜
          </p>
          <div className='my-6 text-center'>
            <img src='/images/book_img.png' className='w-3/4 block mx-auto' />
          </div>
          <p className='my-2 text-gray-600 text-center'>
            ブックメモリーは読書管理ツールです
          </p>
          <p className='my-2 text-gray-600 text-center'>
            あなたが読んだ本の内容を記録しましょう
          </p>
          <LoginDialogButton stylecss='mt-4 bg-blue-600  whitespace-nowrap px-12 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-blue-500'>
            はじめる
          </LoginDialogButton>
        </section>

        <section className='py-8 bg-gray-100 '>
          <div className='px-4 mx-auto max-w-screen-sm'>
            <h2 className='text-xl　m-0 p-0 font-bold text-left'>サンプル</h2>
            <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
              <div className='px-4 py-5 sm:px-6'>
                <h3 className='text-lg leading-6 font-medium text-gray-900 h-96'>
                  イメージ（画像添付予定）
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
