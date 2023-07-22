"use client"
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  
  return (
    <main className={styles.main}>
      {/* Syle jsx has component level Scope if we want to make it global use global keyword after that*/}
      {/* <style jsx>
        {
          `.mySpan{
            color:red;
          }`
        }
      </style> */}
      <div className={styles.center}>
        <h1><span className='mySpan'>We Codes</span></h1>
      </div>
        <Image className={styles.logo} alt='we codes' src="/Logo.png" width='200' height='200' />
        <p className={styles.description}>
          Learn The Code In the easiest Way
        </p>
      <h2>Popluar Blogs</h2>
      <div className="blogs">
        <div className="blogItem">
          <h3>Learn Core Java Complete</h3>
          <p>Java is a Mostly used in Enterprise Systems</p>
        </div>
        <div className="blogItem">
          <h3>Learn Core Java Complete</h3>
          <p>Java is a Mostly used in Enterprise Systems</p>
        </div>
        <div className="blogItem">
          <h3>Learn Core Java Complete</h3>
          <p>Java is a Mostly used in Enterprise Systems</p>
        </div>
      </div>
    </main>
  )
}
