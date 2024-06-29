import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
    <div className="flex md:flex-row flex-col">
      <header className="flex flex-col md:flex-row   md:justify-between items-center pl-40 pr-40 pt-10 ">
        <div className="flex md:flex-row items-center flex-col xl:gap-52 gap-10">
          <div className="flex justify-center items-center gap-3 " >
            <Image src={"/group.png"} alt="logo" width={20} height={20} />

            <h1 className=" tracking-tight font-bold ">StartupLand</h1>

          </div>
          <div>
          <div className="flex items-center  md:flex-row flex-col gap-6">
            <Link className="underline hover:text-[#f2d8ae] " href={"/Home" }>Home</Link>
            <Link className="underline  hover:text-[#f2d8ae] " href={"/Advertise" }>Advertise</Link>
            <Link className="underline  hover:text-[#f2d8ae]" href={"/Support" }>Supports</Link>
            <Link className="underline  hover:text-[#f2d8ae]" href={"/About" }>About</Link>

            
          </div>

        </div>
        {/* link main div */}
        <div className=" flex md:flex-row flex-col xs:mt-[20px] items-center ">
      
          <div>
            <Link className="flex bg-[#fcf5ea] text-amber-500 rounded-lg p-2  w-[103px]" href={"/Get started"} > Get started</Link>
          </div>

        </div>
       </div>



      </header>
    </div>
  );
}