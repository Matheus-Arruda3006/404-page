import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Flock Tech</title>
        <meta name="description" content="Generated by create next app" />     
      </Head>
      <Hero/>     
    </div>
  )
}
