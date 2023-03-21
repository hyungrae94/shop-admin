import Layout from '@/src/components/commons/layout'
import Home from '@/src/components/units/home/Home'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>shop admin</title>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  )
}
