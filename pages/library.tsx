import Layout from "../components/Layout";

export default function Library() {
  return (
    <Layout>
      <div className="py-16 px-2">
        <h2 className="pt-8">マイライブラリ</h2>
        <div className="grid gap-4 bg-grey-light p-4 w-full">
          <div className="p-1 flex flex-col bg-white rounded w-full shadow hover:shadow-md duration-4">
            <div className="relative p-1 text-grey-darker flex">
              <img
                src="https://picsum.photos/25/40"
                alt="Some image"
                className="w-8 flex self-center shadow-lg"
              />
              <p className="p-1 font-bold text-sm">
                Lorem ipsum dolor sit amet.
              </p>
              <a href="#" className="ml-2 flex-shrink-0">
                <img
                  src="/images/dots.svg"
                  alt=""
                  className="w-4 rounded-md absolute top-0 right-0 opacity-30"
                />
              </a>
            </div>
            <form className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="p-2 items-center text-sm">
                  <div className="flex relative">
                    <textarea
                      wrap="hard"
                      placeholder="入力する"
                      className="ml-2 mr-6 flex-1 resize-none focus:outline-none"
                    ></textarea>

                    <a
                      href="#"
                      className="flex-shrink-0 absolute bottom-0 right-0"
                    >
                      <img src="/images/check.svg" alt="" className="w-4" />
                    </a>
                  </div>
                </li>
              </ul>
            </form>
          </div>
          <div className="p-1 flex flex-col bg-white rounded w-full shadow hover:shadow-md duration-4">
            <div className="relative p-1 text-grey-darker flex">
              <img
                src="https://picsum.photos/25/40"
                alt="Some image"
                className="w-8 flex self-center shadow-lg"
              />
              <p className="p-1 font-bold text-sm">
                Lorem ipsum dolor sit amet.
              </p>
              <a href="#" className="ml-2 flex-shrink-0">
                <img
                  src="/images/dots.svg"
                  alt=""
                  className="w-4 rounded-md absolute top-0 right-0 opacity-30"
                />
              </a>
            </div>
            <form className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="p-2 items-center text-sm">
                  <div className="flex">
                    <textarea
                      disabled
                      wrap="hard"
                      className="ml-1 flex-1 resize-none"
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quam quidem laborum, quae impedit laboriosam dolore nemo
                      recusandae, iusto blanditiis soluta omnis hic magni sit?
                      Expedita!
                    </textarea>
                    <div className="ml-2 flex flex-col relative">
                      <a
                        href="#"
                        className="pb-1 flex-shrink-0"
                        id="options-menu"
                      >
                        <img
                          src="/images/dots.svg"
                          alt=""
                          className="w-4 opacity-30"
                        />
                      </a>
                    </div>
                  </div>
                </li>
                <li className="p-2 items-center text-sm">
                  <div className="flex relative">
                    <textarea
                      wrap="hard"
                      placeholder="入力する"
                      className="ml-2 mr-6 flex-1 resize-none focus:outline-none"
                    ></textarea>

                    <a
                      href="#"
                      className="flex-shrink-0 absolute bottom-0 right-0"
                    >
                      <img src="/images/check.svg" alt="" className="w-4" />
                    </a>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
