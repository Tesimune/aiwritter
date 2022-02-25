import Image from "next/image";
const footer = () => {
    return ( 
      <div className="bg-gray-300 dark:bg-slate-900 dark:text-gray-50">
        <footer className="flex justify-center border-t">
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by {' '}
          <span className=''>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        </footer>
      </div>
     );
}
 
export default footer;