import Layout from '../components/Layout';
import LoginDialogButton from '../components/LoginDialogButton';
import LibraryCard from '../components/LibraryCard';

const IndexPage = () => {
  return (
    <Layout title="ブックメモリー">
      <section className="pt-10 pb-4 bg-blue-100">
        <div className="md:container md:mx-auto md:flex md:justify-between">
          <div className="my-8 w-full text-center md:mt-48">
            <h1 className="text-2xl font-semibold text-center md:text-3xl">
              あなたの読書を記録しよう
            </h1>
            <p className="mt-4 mb-4 text-gray-600">
              BookMemoryは
              <span className="text-base pb-1 md:text-lg font-black text-blue-600 border-b-2 border-blue-600">
                超シンプルな読書管理ツール
              </span>
              です
            </p>
            <p className="mt-2 text-gray-600">
              あなたが読んだ本の内容を記録しましょう
            </p>
            <LoginDialogButton>はじめる</LoginDialogButton>
          </div>
          <div className="mt-8 md:mt-16 md:h-96 md:mb-44 text-center w-full">
            <img
              src="/images/welcome-top-view.svg"
              className="w-64 md:w-full mx-auto max-w-xl"
              data-aos="fade-up"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-2 md:flex md:flex-row-reverse">
          <div className="my-8 w-full text-center md:my-16">
            <h2 className="text-xl font-semibold text-center md:text-2xl">
              一度読んだ本、覚えていますか？
            </h2>
            <p className="text-base mt-4 mb-2 text-gray-600">
              毎日どれだけ多くの本を読んだとしても
            </p>
            <p className="text-base mt-2 mb-2 text-gray-600">
              日が経つにつれて忘れてしまいます
            </p>
            <p className="text-base mt-2 mb-2 text-gray-600">
              これは仕方のないことです
            </p>
          </div>
          <div className="flex justify-center my-10 md:container mx-auto md:w-full">
            <img
              src="/images/reading-yellowman.svg"
              className="w-40 ml-auto md:w-60 md:max-w-md"
              data-aos="fade-up"
              alt=""
            />

            <div className="w-10 animate-pulse flex items-center">
              <img
                src="/images/right-arrow.svg"
                data-aos="fade-up"
                data-aos-delay="600"
                alt=""
              />
            </div>
            <img
              src="/images/questions-yellowman.svg"
              className="w-40 mr-auto md:w-60 md:max-w-md"
              data-aos="fade-up"
              data-aos-delay="1500"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-2 md:flex">
          <div className="my-8 w-full text-center md:my-8">
            <h2 className="md:pt-8 text-xl font-semibold text-center md:text-2xl">
              読んだ本を記録しよう！
            </h2>
            <p className="text-sm mt-4 mb-2 text-gray-600">
              インプットだけでは記憶は定着しません
            </p>
            <p className="text-sm mt-4 mb-2 text-gray-600">
              アウトプットすることで記憶の定着率が高まります
            </p>
          </div>
          <div className="flex justify-center my-10 md:container mx-auto md:w-full">
            <img
              src="/images/notebook-blueman.svg"
              className="w-40 ml-auto md:w-60 md:max-w-md"
              data-aos="fade-up"
              alt=""
            />
            <div className="w-10 animate-pulse flex items-center">
              <img
                src="/images/right-arrow.svg"
                data-aos="fade-up"
                data-aos-delay="600"
                alt=""
              />
            </div>
            <img
              src="/images/brain-blueman.svg"
              className="w-40 mr-auto md:w-60 md:max-w-md"
              data-aos="fade-up"
              data-aos-delay="1500"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-20 bg-white">
        <div className="text-center">
          <h2 className="inline pt-8 pb-1 text-2xl font-semibold border-b-4 border-blue-500">
            BookMemoryについて
          </h2>
          <p className="text-base mt-6 mb-2 text-gray-600">
            当サービスは読書記録に特化しています
          </p>
          <p className="text-base mt-4 mb-6 text-gray-600">
            以下の流れでご利用できます
          </p>

          <div className="grid grid-cols-1 mx-16 md:grid-cols-3 md:space-x-1 md:gap-10">
            <div className="shadow-md border-2 border-blue-500 border-opacity-25 rounded-3xl my-2 pb-4 pt-6 px-4 bg-white text-center items-center flex flex-col">
              <div className="text-xl bg-blue-100 text-blue-700 font-bold border-2 border-blue-100 rounded-full h-12 w-12 flex items-center justify-center">
                1
              </div>
              <p className="text-blue-600 font-bold pt-4 items-center">
                記録したい本を検索
              </p>
              <img src="/images/welcome-step1.svg" className="w-40" alt="" />
            </div>
            <div className="shadow-md border-2 border-blue-500 border-opacity-25 rounded-3xl my-2 pb-4 pt-6 px-4 bg-white text-center items-center flex flex-col">
              <div className="text-xl bg-blue-100 text-blue-700 font-bold border-2 border-blue-100 rounded-full h-12 w-12 flex items-center justify-center">
                2
              </div>
              <p className="text-blue-600 font-bold pt-4 items-center">
                ライブラリに登録
              </p>
              <img src="/images/welcome-step2.svg" className="w-40" alt="" />
            </div>
            <div className="shadow-md border-2 border-blue-500 border-opacity-25 rounded-3xl my-2 pb-4 pt-6 px-4 bg-white text-center items-center flex flex-col">
              <div className="text-xl bg-blue-100 text-blue-700 font-bold border-2 border-blue-100 rounded-full h-12 w-12 flex items-center justify-center">
                3
              </div>
              <p className="text-blue-600 font-bold pt-4 items-center">
                読書記録スタート！
              </p>
              <img src="/images/welcome-step3.svg" className="w-40" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-8 bg-white">
        <p className="text-center pb-4 text-lg font-bold">〜 サンプル 〜</p>
        <div className="container mx-auto">
          <LibraryCard
            bid={'default'}
            imgUrl={
              'https://images-na.ssl-images-amazon.com/images/I/51HRqCnj7SL._SX344_BO1,204,203,200_.jpg'
            }
            title={'7つの習慣'}
          ></LibraryCard>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="flex justify-center text-center">
          <LoginDialogButton>使ってみる</LoginDialogButton>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
