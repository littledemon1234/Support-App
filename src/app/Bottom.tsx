import Image from "next/image"     



export default function Bottom() {
    return (
  <div>
       <div className="pt-32 flex justify-between pl-36 pr-36">
       <div>
        <h1 className="text-4xl font-bold leading-relaxed tracking-normal">Ultimate support <br/> system for leading <br/>agencies </h1>
        <div className=" flex flex-col gap-9">
        <p className="leading-9 tracking-tighter">get your test delivered at let home collect sample from <br/>the victory of managments that supplies best <br/> design system guidelines ever</p>
        <div className="flex flex-row gap-3">
        <input  className=" drop-shadow-lg w-[300px] p-3" type="email" name="email" placeholder="Enter your email" />
        <button className="bg-[#FFC059] text-white rounded-md p-2">Get started</button>
        </div>
        </div>
        </div>
        
       
        <div><Image src={"/illustration.png"} alt="logo" width={550} height={550} /></div>
       </div>



  </div>
  
    )
}