import react from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Notfound = () => {
    const router = useRouter();

    useEffect(() => {

        setTimeout(() => {
            // router.go(-1)
            router.push('/')
        }, 5000);

    }, [])

    return ( 
        <div className="text-gray-800 dark:text-gray-50 h-screen w-full">
            <span className="flex justify-center font-bold m-7">404 | Page Not Found</span>
        </div>
     );
}
 
export default Notfound;