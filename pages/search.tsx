import Layout from "../components/Layout";

export default function Search() {
  return (
    <Layout>
      <div className="py-7 px-4">
        <form className="flex flex-grow w-full">
          <input
            type="text"
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="本のタイトルを入力してください"
          />
          <button className="w-20 text-white bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-md">
            検索
          </button>
        </form>
        　
        <div className="pt-8">
          <p>検索結果</p>
          <div className="grid grid-cols-2 gap-4 bg-grey-light py-8 w-full @screen sm:grid-cols-4">
            <div className="bg-white rounded w-1/8 shadow hover:shadow-md duration-4">
              <div className="p-2 text-grey-darker text-justify flex flex-col">
                <img
                  src="https://picsum.photos/200/250"
                  alt="Some image"
                  className="w-32 flex self-center shadow-lg mb-4"
                />
                <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
                  本のタイトル
                </p>
                <div className="flex flex-col">
                  <button className="bg-yellow-400 text-white font-bold p-2 text-xs shadow rounded">
                    Amazon詳細
                  </button>
                  <button className="bg-blue-400 text-white font-bold p-2 text-xs shadow rounded">
                    ライブラリに登録
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded w-1/8 shadow hover:shadow-md duration-4">
              <div className="p-2 text-grey-darker text-justify flex flex-col">
                <img
                  src="https://picsum.photos/200/250"
                  alt="Some image"
                  className="w-32 flex self-center shadow-lg mb-4"
                />
                <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
                  本のタイトル
                </p>
                <div className="flex flex-col">
                  <button className="bg-yellow-400 text-white font-bold p-2 text-xs shadow rounded">
                    Amazon詳細
                  </button>
                  <button className="bg-blue-400 text-white font-bold p-2 text-xs shadow rounded">
                    ライブラリに登録
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded w-1/8 shadow hover:shadow-md duration-4">
              <div className="p-2 text-grey-darker text-justify flex flex-col">
                <img
                  src="https://picsum.photos/200/250"
                  alt="Some image"
                  className="w-32 flex self-center shadow-lg mb-4"
                />
                <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
                  本のタイトル
                </p>
                <div className="flex flex-col">
                  <button className="bg-yellow-400 text-white font-bold p-2 text-xs shadow rounded">
                    Amazon詳細
                  </button>
                  <button className="bg-blue-400 text-white font-bold p-2 text-xs shadow rounded">
                    ライブラリに登録
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded w-1/8 shadow hover:shadow-md duration-4">
              <div className="p-2 text-grey-darker text-justify flex flex-col">
                <img
                  src="https://picsum.photos/200/250"
                  alt="Some image"
                  className="w-32 flex self-center shadow-lg mb-4"
                />
                <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
                  本のタイトル
                </p>
                <div className="flex flex-col">
                  <button className="bg-yellow-400 text-white font-bold p-2 text-xs shadow rounded">
                    Amazon詳細
                  </button>
                  <button className="bg-blue-400 text-white font-bold p-2 text-xs shadow rounded">
                    ライブラリに登録
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded w-1/8 shadow hover:shadow-md duration-4">
              <div className="p-2 text-grey-darker text-justify flex flex-col">
                <img
                  src="https://picsum.photos/200/250"
                  alt="Some image"
                  className="w-32 flex self-center shadow-lg mb-4"
                />
                <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
                  本のタイトル
                </p>
                <div className="flex flex-col">
                  <button className="bg-yellow-400 text-white font-bold p-2 text-xs shadow rounded">
                    Amazon詳細
                  </button>
                  <button className="bg-blue-400 text-white font-bold p-2 text-xs shadow rounded">
                    ライブラリに登録
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded w-1/8 shadow hover:shadow-md duration-4">
              <div className="p-2 text-grey-darker text-justify flex flex-col">
                <img
                  src="https://picsum.photos/200/250"
                  alt="Some image"
                  className="w-32 flex self-center shadow-lg mb-4"
                />
                <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
                  本のタイトル
                </p>
                <div className="flex flex-col">
                  <button className="bg-yellow-400 text-white font-bold p-2 text-xs shadow rounded">
                    Amazon詳細
                  </button>
                  <button className="bg-blue-400 text-white font-bold p-2 text-xs shadow rounded">
                    ライブラリに登録
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <p>あなたへのおすすめ</p>
          <div className="grid grid-cols-2 gap-4 bg-grey-light py-8 w-full @screen sm:grid-cols-4">
            <div className="bg-white rounded w-1/8 shadow hover:shadow-md duration-4">
              <div className="p-2 text-grey-darker text-justify flex flex-col">
                <img
                  src="https://picsum.photos/200/250"
                  alt="Some image"
                  className="w-32 flex self-center shadow-lg mb-4"
                />
                <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
                  本のタイトル
                </p>
                <div className="flex flex-col">
                  <button className="bg-yellow-400 text-white font-bold p-2 text-xs shadow rounded">
                    Amazon詳細
                  </button>
                  <button className="bg-blue-400 text-white font-bold p-2 text-xs shadow rounded">
                    ライブラリに登録
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded w-1/8 shadow hover:shadow-md duration-4">
              <div className="p-2 text-grey-darker text-justify flex flex-col">
                <img
                  src="https://picsum.photos/200/250"
                  alt="Some image"
                  className="w-32 flex self-center shadow-lg mb-4"
                />
                <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
                  本のタイトル
                </p>
                <div className="flex flex-col">
                  <button className="bg-yellow-400 text-white font-bold p-2 text-xs shadow rounded">
                    Amazon詳細
                  </button>
                  <button className="bg-blue-400 text-white font-bold p-2 text-xs shadow rounded">
                    ライブラリに登録
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded w-1/8 shadow hover:shadow-md duration-4">
              <div className="p-2 text-grey-darker text-justify flex flex-col">
                <img
                  src="https://picsum.photos/200/250"
                  alt="Some image"
                  className="w-32 flex self-center shadow-lg mb-4"
                />
                <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
                  本のタイトル
                </p>
                <div className="flex flex-col">
                  <button className="bg-yellow-400 text-white font-bold p-2 text-xs shadow rounded">
                    Amazon詳細
                  </button>
                  <button className="bg-blue-400 text-white font-bold p-2 text-xs shadow rounded">
                    ライブラリに登録
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded w-1/8 shadow hover:shadow-md duration-4">
              <div className="p-2 text-grey-darker text-justify flex flex-col">
                <img
                  src="https://picsum.photos/200/250"
                  alt="Some image"
                  className="w-32 flex self-center shadow-lg mb-4"
                />
                <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
                  本のタイトル
                </p>
                <div className="flex flex-col">
                  <button className="bg-yellow-400 text-white font-bold p-2 text-xs shadow rounded">
                    Amazon詳細
                  </button>
                  <button className="bg-blue-400 text-white font-bold p-2 text-xs shadow rounded">
                    ライブラリに登録
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded w-1/8 shadow hover:shadow-md duration-4">
              <div className="p-2 text-grey-darker text-justify flex flex-col">
                <img
                  src="https://picsum.photos/200/250"
                  alt="Some image"
                  className="w-32 flex self-center shadow-lg mb-4"
                />
                <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
                  本のタイトル
                </p>
                <div className="flex flex-col">
                  <button className="bg-yellow-400 text-white font-bold p-2 text-xs shadow rounded">
                    Amazon詳細
                  </button>
                  <button className="bg-blue-400 text-white font-bold p-2 text-xs shadow rounded">
                    ライブラリに登録
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded w-1/8 shadow hover:shadow-md duration-4">
              <div className="p-2 text-grey-darker text-justify flex flex-col">
                <img
                  src="https://picsum.photos/200/250"
                  alt="Some image"
                  className="w-32 flex self-center shadow-lg mb-4"
                />
                <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
                  本のタイトル
                </p>
                <div className="flex flex-col">
                  <button className="bg-yellow-400 text-white font-bold p-2 text-xs shadow rounded">
                    Amazon詳細
                  </button>
                  <button className="bg-blue-400 text-white font-bold p-2 text-xs shadow rounded">
                    ライブラリに登録
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
