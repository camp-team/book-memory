import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
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
          rel="noopener"
          className="underline"
        >
          @welove_tk
        </a>
        が作成しました
      </p>
    </footer>
  );
};

export default Footer;
