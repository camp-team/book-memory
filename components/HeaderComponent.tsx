import React, {
  ReactNode,
  useState,
  ChangeEvent,
  useEffect,
  KeyboardEvent,
  memo,
} from 'react';
import LoginDialogButton from './LoginDialogButton';
import { MenuVar } from './MenuVar';
import { useRouter } from 'next/router';
import { fuego } from '@nandorojo/swr-firestore';
import { NextSeo } from 'next-seo';
import { User } from 'firebase';
import Image from 'next/image';

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Header = memo(({ title = 'BookMemory' }: Props) => {
  const router = useRouter();
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [user, setuser] = useState<User | null | undefined>(undefined);

  //ユーザーログイン検知
  useEffect(() => {
    const unsub = fuego.auth().onAuthStateChanged((authUser) => {
      setuser(authUser);
    });
    return unsub;
  }, [user]);

  //検索結果画面へ
  const searchBook = (input: string) => {
    if (input.trim() === '') return;
    router.push({
      pathname: '/search',
      query: { booktitle: input },
    });
  };
  //検索欄でエンター押下時
  const onKeyDownSeach = (
    event: KeyboardEvent<HTMLDivElement>,
    input: string
  ): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      searchBook(input);
    }
  };

  return (
    <div>
      <NextSeo
        title={title}
        description="超シンプルな読書記録ツール"
        canonical="https://book-memory.com"
        openGraph={{
          url: `https://book-memory.com`,
          title: 'BookMemory',
          description: '超シンプルな読書記録ツール',
          images: [
            {
              url: '/images/book-memory-ogp1.jpg',
              width: 1200,
              height: 630,
              alt: 'BookMemory',
            },
            {
              url: '/images/book-memory-ogp2.jpg',
              width: 600,
              height: 600,
              alt: 'BookMemory',
            },
          ],
        }}
        twitter={{
          handle: '@welove_tk',
          site: '@welove_tk',
          cardType: 'summary_large_image',
        }}
      />
      <header className="fixed top-0 -inset-x-0 bg-blue-600 p-2 px-4 flex justify-between items-center md:space-x-2 z-30">
        <Image
          src="/images/logo_BookMemory.png"
          width={145}
          height={24}
          alt=""
          className="w-36 h-6 cursor-pointer"
          onClick={() => router.push('/')}
        />

        <form className="ml-4 items-center hidden w-1/2 sm:flex">
          {/* PCサイズの検索欄 */}
          <input
            type="text"
            value={searchInput}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setSearchInput(event.target.value);
            }}
            onKeyDown={(event) => onKeyDownSeach(event, searchInput)}
            className="md:w-11/12 whitespace-nowrap px-2 py-2 border border-white rounded-l-md shadow-sm text-sm font-medium outline-none"
            placeholder="本のタイトルを入力"
            maxLength={50}
            autoComplete="on"
          />

          <a
            href="#"
            onClick={() => searchBook(searchInput)}
            className="inline-flex px-2 py-2 border border-white rounded-r-md shadow-sm text-sm font-medium text-white hover:bg-blue-500"
            aria-label="検索"
          >
            <Image
              src="/images/search.svg"
              width={30}
              height={20}
              alt=""
              className="w-5 rounded-md"
            />
          </a>
        </form>
        <div className="flex items-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-2 py-2 border border-white rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-500 sm:hidden"
            onClick={() => setSearchBarVisible(!searchBarVisible)}
            aria-label="検索欄表示"
          >
            <Image
              src="/images/search.svg"
              width={25}
              height={20}
              alt=""
              className="w-5"
            />
          </a>
          {!user ? (
            user === null ? (
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
              onClick={() => setSearchBarVisible(!searchBarVisible)}
            >
              <Image
                src="/images/arrow-left.svg"
                width={25}
                height={20}
                alt=""
                className="w-5"
              />
            </a>
            {/* スマホサイズの検索欄 */}
            <input
              type="text"
              className="ml-1 w-9/12 whitespace-nowrap px-2 py-2 border border-white rounded-l-md shadow-sm text-sm font-medium outline-none"
              placeholder="本のタイトルを入力"
              value={searchInput}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setSearchInput(event.target.value);
              }}
              onKeyDown={(event) => onKeyDownSeach(event, searchInput)}
              maxLength={50}
            />
            <a
              href="#"
              onClick={() => {
                searchBook(searchInput);
              }}
              className="inline-flex items-center justify-center px-2 py-2 border border-white rounded-r-md shadow-sm text-sm font-medium text-white hover:bg-blue-500"
              aria-label="検索"
            >
              <Image
                src="/images/search.svg"
                width={25}
                height={20}
                alt=""
                className="w-5 rounded-md"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
});
