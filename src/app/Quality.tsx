import Link from "next/link";
import Image from "next/image"

export default function Quality() {
  return (
    <div className="flex md:flex-row flex-col justify-center">

      <div className="bg-[#353448]  mt-10 md:h-[700px] ">

        <div className="md:pl-20 pt-14 md:pb-20">
          <Image className="md:w-[1267px] w-0" src={"/tabsection.png"} alt="tab section" width={500} height={500} />
        </div>



        <div className=" flex md:flex-row flex-col md:justify-center md:gap-28 md:mr-0 mr-2 ml-[21px] md:ml-0 ">

          <div className="md:pl-20 md:w-[1000px]">
            <div >
              <h1 className="text-3xl font-bold leading-relaxed tracking-tight text-white">Introduce quality feature that boost your website rank & performance</h1>
              <p className="pt-5 leading-8 text-white">Build an incredible workplace that grow your business with Gusto&apos;s all in one platform with amazing contents. Get your test delivered at home collect sample from the victory of supplies design  </p>
            </div>
            <div className="mt-10  ">
              <Link className="bg-[#FFC059]  text-white rounded-md p-3" href={"/More details"} > More details</Link>
            </div>
          </div>

          <div >
            <Image className="w-[1267px] h-[405px] md:mt-0 mt-6" src={"/Mask.png"} alt="Mask" width={1267} height={405} />
          </div>
        </div>




















      </div>
    </div>
  );
}