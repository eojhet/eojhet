import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '/styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eojhet.com</title>
        <meta name="eojhet.com" content="eojhet projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>

        <div className={styles.card}>
          <div className={styles.title}>
            <h2>The Boring App</h2>
          </div>
          <div className={styles.body}>
            <h3>Get Ready</h3>
            The Boring App is a web application which takes subsurface geological data and outputs
            a graphical boring log. The goal of this project is export a formatted PDF with boring log.
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.title}>
            TITLE CARD
          </div>
          <div className={styles.body}>
            BODY OF CARD
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.title}>
            TITLE CARD
          </div>
          <div className={styles.body}>
            BODY OF CARD
          </div>
        </div>
        
      </main>
      <Footer />
    </div>
  )
}
