import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="fixed top-0 -inset-x-0 bg-blue-600">
      <div className="max-w-screen-sm mx-auto px-2">
        <div className="items-center flex justify-between p-4 border-b-1">
          <a className="text-white text-base">
          LOGO
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#" className="ml-3 whitespace-nowrap inline-flex items-center justify-center px-2 py-2 border border-white rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-500">
              本を検索する
            </a>
            <a href="#" className="ml-3 whitespace-nowrap inline-flex items-center justify-center px-2 py-2 border border-white rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-500">
              ログイン
            </a>
          </nav>
        </div>
      </div>
    </header>
    <main>{children}</main>
    {/* <footer class="pt-10 pb-8 bg-gray-50">
      <div class="flex flex-wrap justify-center px-4 ">
        <a href="#" class="mx-4">利用規約</a>
        <a href="#" class="mx-4">プライバシーポリシー</a>
        <a href="#" class="mx-4">お問合せ</a>
      </div>
      <p class="text-center m-4">©️E-LOVE</p>
    </footer> */}
  </div>
)

export default Layout
