import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../Components/Homepage'

export default function Home(){
    
  return(
      <div className={styles.container}>

        <Head>
          <title>Jenny Puzey</title>
        </Head>

        <main className={styles.main}>

          <h1 className={styles.title}>Jenny Puzey: GNU/Linux lover</h1>
        
          <HomePage />
      
        </main>

      </div>
  )

}