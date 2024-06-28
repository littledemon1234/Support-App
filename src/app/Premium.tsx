
import Image from "next/image";

export default function Premium() {
    return (
        <div className="flex gap-3 flex-1  ">
                 <div className="pt-16 ">
                  <Image src={"/img.png"} alt="logo" width={900} height={800} />
                 </div>
           
           {/* text div main*/}
           <div className="flex flex-col w-[800px] pr-44 pt-16">
           
           
           <div >
                
                  <h1 className="text-3xl font-bold leading-relaxed tracking-tight">Meet our perimium features  that will make you WoW </h1>
                 
               
               
               <p className="pt-5 leading-9">Build an incredible workplace and grow your business with Gusto's all in one platform with amazing contents.</p>
           </div>
           
           {/* last three main div */}
           <div div className="mt-5">
           
             <div className="shadow-xl  py-3 px-5  ">
              <h2 className=" font-bold leading-relaxed tracking-normal text-[#0F2137]">Organize you project content</h2>
              <p className="text-[#343D48]">get your website adds test delivered at let collect samples from the victory of the update managment that supplies best design system which guidelines ever with multiple features</p>
             </div>

           <div className="bg-[#F6F8FB] text-[#0F2137]  md:w-[450px] mt-5 tracking-tight p-5 rounded-lg  flex items-center gap-9 ">
             <h1>Collaborate your multiple team support easily</h1>
             <Image src={"/Forma 1.png"} alt="logo" width={20} height={20} />
           </div>
           <div className="bg-[#F6F8FB] text-[#0F2137] mt-5 md:w-[450px] p-5 rounded-lg ttracking-tight flex items-center gap-14">
             <h1>build your team knowledge base system</h1>
             <Image src={"/Forma 1.png"} alt="logo" width={20} height={20} />
           </div>
           
           </div>















           </div>


        </div>
    );
}