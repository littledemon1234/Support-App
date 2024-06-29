import Image from "next/image"     



export default function Bottom() {
    return (
  <div>
       <div className="md:pt-32 flex md:flex-row flex-col  justify-between md:pl-36 md:pr-36">
       <div >
        <h1 className="text-4xl font-bold leading-relaxed tracking-normal pl-[21px] md:pl-0 md:pr-0 pr-[21px] ">Ultimate support  system for leading agencies </h1>
        <div className=" flex flex-col gap-9">
        <p className="leading-9 tracking-tighter pl-[21px] md:pl-0 md:pr-0 pr-[21px]  ">Get your test delivered at let home collect sample from the victory of managments that supplies best design system guidelines ever</p>
        <div className="flex md:flex-row flex-col  gap-3">
        <input  className=" drop-shadow-lg md:w-[300px] p-3" type="email" name="email" placeholder="Enter your email" />
        <button className="bg-[#FFC059] text-white rounded-md p-2">Get started</button>
        </div>
        </div>
        </div>
        
       
        <div><Image className="mt-11 md:mt-0" src={"/illustration.png"} alt="logo" width={550} height={550} /></div>
       </div>



  </div>
  
    )
}