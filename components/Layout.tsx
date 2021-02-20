import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const onClickSearchBarVisible = () => {
    setSearchBarVisible(!searchBarVisible);
  };
  const onClickLogin = () => {
    setIsLogin(true);
    console.log(isLogin);
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header className='fixed top-0 -inset-x-0 bg-blue-600 p-2 px-4 flex justify-between items-center md:space-x-2'>
        <a className='text-white text-base'>LOGO</a>
        <div className='items-center hidden w-1/2 sm:flex'>
          <input
            type='text'
            className='md:w-11/12 whitespace-nowrap px-2 py-2 border border-white rounded-l-md shadow-sm text-sm font-medium outline-none'
            placeholder='本のタイトルを入力'
          />
          <a
            href='#'
            className='inline-flex px-2 py-2 border border-white rounded-r-md shadow-sm text-sm font-medium text-white hover:bg-blue-500'
          >
            <img src='/images/search.svg' alt='' className='w-5 rounded-md' />
          </a>
        </div>
        <div className='flex items-center'>
          <a
            href='#'
            className='inline-flex items-center justify-center px-2 py-2 border border-white rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-500 sm:hidden'
            onClick={onClickSearchBarVisible}
          >
            <img src='/images/search.svg' alt='' className='w-5' />
          </a>
          {isLogin ? (
            <a href='#'>
              <img
                src='https://picsum.photos/100/100'
                alt='Some image'
                className='ml-4 rounded-full h-9 w-9 flex items-center justify-center'
              />
            </a>
          ) : (
            <a
              href='#'
              className='ml-4 p-2 border border-white rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-500'
              onClick={onClickLogin}
            >
              ログイン
            </a>
          )}
        </div>
      </header>

      {searchBarVisible && (
        <div className='fixed top-0 -inset-x-0 bg-blue-600 p-2 flex justify-between items-center sm:hidden'>
          <div className='flex items-center w-full'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-1 py-1 shadow-sm text-sm font-nomal text-white hover:bg-blue-500'
              onClick={onClickSearchBarVisible}
            >
              <img src='/images/arrow-left.svg' alt='' className='w-5' />
            </a>

            <input
              type='text'
              className='ml-1 w-9/12 whitespace-nowrap px-2 py-2 border border-white rounded-l-md shadow-sm text-sm font-medium outline-none'
              placeholder='本のタイトルを入力'
            />
            <a
              href='#'
              className='inline-flex items-center justify-center px-2 py-2 border border-white rounded-r-md shadow-sm text-sm font-medium text-white hover:bg-blue-500'
            >
              <img src='/images/search.svg' alt='' className='w-5 rounded-md' />
            </a>
          </div>
        </div>
      )}

      <main>{children}</main>
      <footer className='pt-10 pb-8 bg-gray-50'>
        <div className='flex flex-wrap justify-center space-x-4'>
          <a href='#'>利用規約</a>
          <a href='#'>プライバシーポリシー</a>
          <a href='#'>お問合せ</a>
        </div>
        <p className='text-center m-4'>©️E-LOVE</p>
      </footer>
    </div>
  );
};

export default Layout;
