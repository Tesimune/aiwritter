import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/navbar'
import Footer from '../comps/Footer'

export default function Home() {
  return (
   <div className='text-gray-100 dark:text-gray-50'> 
      <Head>
        <title>aiwritter</title>
        <meta name="description" content="Artificial inteligence writter assitant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-3 h-screen">
        
        <div className='border-t border-gray-700'>
          <form className='md:my-5 md:mx-24' method='post'>
            <div className='flex justify-end my-2 p-1 rounded bg-gradient-to-t from-emerald-600 to-slate-600'>
              <button className='flex font-bold uppercase bg-slate-500 p-2 rounded shadow-2xl mx-1'>
                <span className='p-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </span>
                <span className='hidden md:block'>
                  Gramma Check
                </span>
              </button>
              <button className='flex font-bold uppercase bg-slate-500 p-2 rounded shadow-2xl mx-1'>
                <span className='p-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span className='hidden md:block'>
                  Plagiarism Check
                </span>
              </button>
              <button className='flex font-bold uppercase bg-slate-500 p-2 rounded shadow-2xl mx-1'>
                <span className='p-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>
                <span className='hidden md:block'>
                  Plagiarism Remover
                </span>
              </button>
            </div>
            <textarea className='dark:bg-slate-600 w-full h-96 p-2 rounded-lg shadow-xl border'></textarea>
          </form>
        </div>
       
      </main>
      
    </div>
  )
}
