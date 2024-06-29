import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
    <div className="flex md:flex-row flex-col">
      <header className="flex flex-col md:flex-row   md:justify-between items-center pl-40 pr-40 pt-10 ">
        <div className="flex md:flex-row items-center flex-col xl:gap-52 gap-10">
          <div className="flex justify-center gap-3 " >
            <Image src={"/group.png"} alt="logo" width={20} height={20} />

            <h1 className=" tracking-tight font-bold ">StartupLand</h1>

          </div>
          <div>
          <div className="flex items-center  md:flex-row flex-col gap-6">
            <h2 className="underline">Home</h2>
            <h2 className="underline">Advertise</h2>
            <h2 className="underline">Supports</h2>
            <h2 className="underline">About</h2>

            
          </div>

        </div>
        {/* link main div */}
        <div className=" gap-5 flex md:flex-row flex-col xs:mt-[20px] items-center ">
          <div className=" flex md:flex-row flex-row  items-center gap-2">
            <Image src={"/lock.png"} alt="logo" width={15} height={15} />
            <p>Login</p>
          </div>
          <div>
            <Link className="flex bg-[#fcf5ea] text-amber-500 rounded-lg p-2  w-[103px]" href={"/Get started"} > Get started</Link>
          </div>

        </div>
       </div>



      </header>
    </div>
  );
}