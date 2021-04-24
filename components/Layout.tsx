import React, { ReactNode, useState, ChangeEvent } from 'react';
import Link from 'next/link';
import LoginDialogButton from '../components/LoginDialogButton';
import MenuVar from '../components/MenuVar';
import { useRouter } from 'next/router';
import { fuego } from '@nandorojo/swr-firestore';
import { NextSeo } from 'next-seo';

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({ children, title = 'ブックメモリー' }: Props) => {
  const router = useRouter();
  const currentUser = fuego.auth().currentUser;
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  //メモリー入力中関数
  const onChangeSearchInput: any = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  const onClickSearchBarVisible = () => {
    setSearchBarVisible(!searchBarVisible);
  };

  const onClickSearchBook = (input: string) => {
    if (input === '') return;
    router.push({
      pathname: '/search',
      query: { booktitle: input },
    });
  };
  const onClickLogo = () => {
    router.push('/');
  };
  return (
    <div>
      <NextSeo
        title={title}
        description="読書記録ツール"
        openGraph={{
          url: `https://book-memory.com`,
          images: [{ url: '/images/bookmemory-ogp.jpg', alt: 'BookMemory' }],
        }}
      />
      <header className="fixed top-0 -inset-x-0 bg-blue-600 p-2 px-4 flex justify-between items-center md:space-x-2 z-30">
        <a onClick={onClickLogo} className="cursor-pointer">
          <img src="/images/logo_BookMemory.png" alt="" className="w-36" />
        </a>
        <div className="ml-4 items-center hidden w-1/2 sm:flex">
          <input
            type="text"
            value={searchInput}
            onChange={onChangeSearchInput}
            className="md:w-11/12 whitespace-nowrap px-2 py-2 border border-white rounded-l-md shadow-sm text-sm font-medium outline-none"
            placeholder="本のタイトルを入力"
          />
          <a
            href="#"
            onClick={() => {
              onClickSearchBook(searchInput);
            }}
            className="inline-flex px-2 py-2 border border-white rounded-r-md shadow-sm text-sm font-medium text-white hover:bg-blue-500"
          >
            <img src="/images/search.svg" alt="" className="w-5 rounded-md" />
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-2 py-2 border border-white rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-500 sm:hidden"
            onClick={onClickSearchBarVisible}
          >
            <img src="/images/search.svg" alt="" className="w-5" />
          </a>
          {!currentUser ? (
            currentUser === null ? (
              //未ログインのパターン（ログインボタン表示）
              <LoginDialogButton>ログイン</LoginDialogButton>
            ) : (
              //ログイン情報取得中のパターン（つまりcurrentUserがundefiendの状態）
              //※Googleアイコン描写時に検索欄が動かないようにするためのダミー
              <div className="ml-4 rounded-full h-9 w-9"></div>
            )
          ) : (
            //ログイン情報取得済のパターン（アイコン表示）
            <MenuVar />
          )}
        </div>
      </header>

      {searchBarVisible && (
        <div className="fixed top-0 -inset-x-0 bg-blue-600 p-2 flex justify-between items-center sm:hidden z-40">
          <div className="flex items-center w-full">
            <a
              href="#"
              className="inline-flex items-center justify-center px-1 py-1 shadow-sm text-sm font-nomal text-white hover:bg-blue-500"
              onClick={onClickSearchBarVisible}
            >
              <img src="/images/arrow-left.svg" alt="" className="w-5" />
            </a>

            <input
              type="text"
              className="ml-1 w-9/12 whitespace-nowrap px-2 py-2 border border-white rounded-l-md shadow-sm text-sm font-medium outline-none"
              placeholder="本のタイトルを入力"
              value={searchInput}
              onChange={onChangeSearchInput}
            />
            <a
              href="#"
              onClick={() => {
                onClickSearchBook(searchInput);
              }}
              className="inline-flex items-center justify-center px-2 py-2 border border-white rounded-r-md shadow-sm text-sm font-medium text-white hover:bg-blue-500"
            >
              <img src="/images/search.svg" alt="" className="w-5 rounded-md" />
            </a>
          </div>
        </div>
      )}

      <main>{children}</main>
      <footer className="pt-10 pb-8 bg-gray-50 opacity-70">
        <div className="flex flex-wrap justify-center space-x-4">
          <Link href="/terms">
            <a>利用規約</a>
          </Link>
          <Link href="/privacypolicy">
            <a>プライバシーポリシー</a>
          </Link>
        </div>
        <p className="text-center m-4">
          このサービスは
          <a
            href="https://twitter.com/welove_tk"
            target="_blank"
            className="underline"
          >
            @welove_tk
          </a>
          が作成しました
        </p>
      </footer>
    </div>
  );
};

export default Layout;
