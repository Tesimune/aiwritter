import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/navbar'
import Footer from '../comps/Footer'

export default function Home() {
  return (
   <div> 
      <Head>
        <title>aiwritter</title>
        <meta name="description" content="Artificial inteligence writter assitant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-3 h-screen">
        
        <div className='border-t border-gray-700'>
          <form className='my-5 mx-24'>
            <textarea className='dark:bg-slate-600 w-full h-96 p-2 rounded-lg shadow-inner-xl'></textarea>
          </form>
        </div>
       
      </main>

      
    </div>
  )
}
