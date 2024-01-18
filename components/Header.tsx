'use client'
import React from 'react'
import Head from 'next/head'
// import { useRouter } from 'next/router'
import { useRouter, usePathname } from 'next/navigation'
import Nav from './Nav'
import Footer from './Footer'
import Showcase from './Showcase'
import styles from '../styles/Header.module.css'

function Header({ title, keywords, description, children }: Record<string, any>) {
  const router = useRouter();
  const pathname = usePathname();
  console.log("%c 👐: Header -> pathname ", "font-size:16px;background-color:#bca8e0;color:white;", pathname)

  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <title>Header made</title>
      </Head>

      <Nav/>
      {/* {router.pathname === '/' && <Showcase/>} //this was use in the nextjs 2022 */}
      {pathname === '/' && <Showcase/>}
      <div className={styles.container}>
        {children}
      </div>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-20">
        {children}
      </main> */}
      <Footer/>
    </div>
  )
}

export default Header

Header.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and musical parties',
  keywords: 'music, dj, edm, events'
}