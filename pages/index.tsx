import type { NextPage } from 'next'
import Head from 'next/head'
import LandingPage from './LandingPage'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Graph Hack 2022</title>
        <meta name="description" content="grpah hack 2022 entry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LandingPage />
      </main>

      <footer className={styles.footer}>
        <span>
          Built by{' '}

        </span>
      </footer>
    </div>
  )
}

export default Home
