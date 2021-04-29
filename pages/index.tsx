import Layout from '../components/Layout';
import LoginDialogButton from '../components/LoginDialogButton';
import LibraryCard from '../components/LibraryCard';
import Image from 'next/image';

const IndexPage = () => {
  return (
    <Layout title="ブックメモリー">
      <section className="pt-10 pb-4 bg-blue-100">
        <div className="container md:mx-auto md:flex md:justify-between">
          <div className="my-8 w-full text-center md:mt-48">
            <h1 className="text-4xl mb-2 font-semibold text-center tracking-wider">
              BookMemory
            </h1>
            <p className="text-lg mb-6 md:text-lg font-black text-blue-700">
              ー 超シンプルな読書管理ツール ー
            </p>
            <p className="text-gray-600">あなたが読んだ本の内容を記録しよう</p>
            <LoginDialogButton>はじめる</LoginDialogButton>
          </div>
          <div className="px-6 mt-6 md:mt-16 md:h-96 md:mb-44 text-center w-full">
            <Image
              src="/images/welcome-top-view.svg"
              width={500}
              height={500}
              data-aos="fade-up"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-2 md:flex md:flex-row-reverse md:items-center">
          <div className="my-8 w-full text-center md:my-16">
            <h2 className="text-lg font-semibold text-center md:text-2xl">
              一度読んだ本、覚えていますか？
            </h2>
            <p className="text-sm mt-4 mb-2 text-gray-600 md:text-base">
              毎日どれだけ多くの本を読んだとしても
            </p>
            <p className="text-sm mt-2 mb-2 text-gray-600 md:text-base">
              日が経つにつれて忘れてしまいます
            </p>
            <p className="text-sm mt-2 mb-2 text-gray-600 md:text-base">
              これは仕方のないことです
            </p>
          </div>
          <div className="flex justify-center my-10 md:container mx-auto md:w-full">
            <Image
              src="/images/reading-yellowman.svg"
              width={250}
              height={250}
              data-aos="fade-up"
              alt=""
            />

            <div className="w-10 animate-pulse flex items-center">
              <Image
                src="/images/right-arrow.svg"
                width={300}
                height={300}
                data-aos="fade-up"
                data-aos-delay="600"
                alt=""
              />
            </div>
            <Image
              src="/images/questions-yellowman.svg"
              width={250}
              height={250}
              data-aos="fade-up"
              data-aos-delay="1500"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-2 md:flex md:items-center">
          <div className="my-8 w-full text-center md:my-8">
            <h2 className="text-lg font-semibold text-center md:text-2xl">
              読んだ本を記録しよう！
            </h2>
            <p className="text-sm mt-4 mb-2 text-gray-600 md:text-base">
              インプットだけでは記憶は定着しません
            </p>
            <p className="text-sm mt-4 mb-2 text-gray-600 md:text-base">
              アウトプットにより記憶の定着率が高まります
            </p>
          </div>
          <div className="flex justify-center my-10 md:container mx-auto md:w-full">
            <Image
              src="/images/notebook-blueman.svg"
              width={250}
              height={250}
              data-aos="fade-up"
              alt=""
            />
            <div className="w-10 animate-pulse flex items-center">
              <Image
                src="/images/right-arrow.svg"
                width={300}
                height={300}
                data-aos="fade-up"
                data-aos-delay="600"
                alt=""
              />
            </div>
            <Image
              src="/images/brain-blueman.svg"
              width={250}
              height={250}
              data-aos="fade-up"
              data-aos-delay="1500"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-20 bg-white">
        <div className="text-center">
          <h2 className="inline-block pt-8 pb-2 text-2xl font-semibold">
            BookMemoryについて
          </h2>
          <p className="mx-auto w-16 h-2 bg-blue-500"></p>
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
              <Image
                src="/images/welcome-step1.svg"
                width={160}
                height={160}
                alt=""
              />
            </div>
            <div className="shadow-md border-2 border-blue-500 border-opacity-25 rounded-3xl my-2 pb-4 pt-6 px-4 bg-white text-center items-center flex flex-col">
              <div className="text-xl bg-blue-100 text-blue-700 font-bold border-2 border-blue-100 rounded-full h-12 w-12 flex items-center justify-center">
                2
              </div>
              <p className="text-blue-600 font-bold pt-4 items-center">
                ライブラリに登録
              </p>
              <Image
                src="/images/welcome-step2.svg"
                width={160}
                height={160}
                alt=""
              />
            </div>
            <div className="shadow-md border-2 border-blue-500 border-opacity-25 rounded-3xl my-2 pb-4 pt-6 px-4 bg-white text-center items-center flex flex-col">
              <div className="text-xl bg-blue-100 text-blue-700 font-bold border-2 border-blue-100 rounded-full h-12 w-12 flex items-center justify-center">
                3
              </div>
              <p className="text-blue-600 font-bold pt-4 items-center">
                読書記録スタート！
              </p>
              <Image
                src="/images/welcome-step3.svg"
                width={160}
                height={160}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-8 bg-white">
        <p className="text-center pb-2 text-lg font-bold">〜 サンプル 〜</p>
        <p className="text-sm text-center pb-2 text-gray-600 md:text-base">
          以下のように記録できます
        </p>
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
