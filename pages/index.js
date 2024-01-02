import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Test Change on my page Welcome to my Page-Thank-You-So-Much" />
        <p className="description">
          Test-Edit-Webpage <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
