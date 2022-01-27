import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Louis CHABERT</title>
        <meta name="description" content="Mylife" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to<a href="https://nextjs.org"> mylife</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Photo &rarr;</h2>
            <p>Martinique, Oman, Plongée, la famille, le lycée,...</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Ma vie &rarr;</h2>
            <p>Appuyer pour voir où j'ai fait mes études, pour découvrir ma vie, mon profil instagram,...</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>La famille &rarr;</h2>
            <p>Découvrez toute ma famille, l'arbre généalogique et plein d'autres choses</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Le lycée &rarr;</h2>
            <p>
              Accédez à tous les cours en ligne.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <p> Louis </p>
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
