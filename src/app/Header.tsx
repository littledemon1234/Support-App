 import Image from "next/image";
import Link from "next/link";


 export default function Header() {
  return (
   
  <header className="flex justify-between items-center pl-40 pr-40 pt-10 ">
     <div className="flex  gap-52">
     <div className="flex justify-center gap-3 " >
       <Image src={"/group.png"} alt="logo" width={20} height={20} />
       
       <h1 className=" tracking-tight font-bold   ">StartupLand</h1>
       
     </div>
     <div className="flex items-center gap-6">
        <h2>Home</h2>
        <h2>Advertise</h2>
        <h2>Supports</h2>
        <h2>About</h2>
       <Image src={"/search.png"} alt="logo" width={15} height={5} />
      </div>
    </div>
      {/* link main div */}
        <div className="flex gap-5">
          <div className="flex  items-center gap-2">
            <Image src={"/lock.png"} alt="logo" width={15} height={15} />
            <p>Login</p>
           </div>
         <div>
            <Link className="bg-neutral-300 text-amber-500 rounded-lg p-2" href={"/Get started"} > Get strated</Link>
         </div>
        </div>
       
    
      
    </header>
    
  );
}