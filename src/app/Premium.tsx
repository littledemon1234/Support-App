
import Image from "next/image";

export default function Premium() {
  return (
    <div className="flex gap-3  flex-col  md:flex-row ">
      <div className="md:pt-16 ">
        <Image className="md:w-[600px] md:h-[500px]" src={"/img.png"} alt="logo" width={900} height={800} />
      </div>

      {/* text div main*/}
      <div className="flex flex-col md:w-[600px]  md:pr-5  pt-16">


        <div className="md:m-0 ml-[21px] mr-[21px] md:mr-0" >

          <h1 className="md:text-3xl text-xl font-bold leading-relaxed tracking-tight">Meet our preimium features  that will make you WoW </h1>



          <p className="pt-5 leading-9 md:text-xl text-sm">Build an incredible workplace and grow your business with Gusto&apos;s all in one platform with amazing contents.</p>
        </div>

        {/* last three main div */}
        <div className="mt-5">

          <div className="shadow-xl  py-3 px-5  ">
            <h2 className=" font-bold leading-relaxed tracking-normal text-[#0F2137]">Organize you project content</h2>
            <p className="text-[#343D48]">get your website adds test delivered at let collect samples from the victory of the update managment that supplies best design system which guidelines ever with multiple features</p>
          </div>

          <div className="bg-[#F6F8FB] text-[#0F2137]  md:w-[450px] mt-5 tracking-tight p-5 rounded-lg ml-[10px] md:ml-0 md:mr-0 mr-[10px]  flex items-center gap-9 ">
            <h1>Collaborate your multiple team support easily</h1>
            <Image src={"/Forma 1.png"} alt="logo" width={20} height={20} />
          </div>
          <div className="bg-[#F6F8FB] text-[#0F2137] mt-5 md:w-[450px] p-5 rounded-lg ttracking-tight flex items-center ml-[10px] md:ml-0 md:mr-0 mr-[10px] gap-14">
            <h1>build your team knowledge base system</h1>
            <Image src={"/Forma 1.png"} alt="logo" width={20} height={20} />
          </div>

        </div>















      </div>


    </div>
  );
}