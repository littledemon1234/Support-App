import Link from "next/link"
import Image from "next/image"



export default function Instant() {
  return (
    <div className="flex md:flex-row flex-col md:mt-10 mt-6 ml-[21px] mr-[15px] md:ml-0 md:mr-0  gap-7 justify-center ">
      <div className=" flex flex-col md:w-[500px] md:ml-[21px]  md:mr-[21px] ">
        <div >
          <h1 className="md:text-3xl text-xl font-bold leading-relaxed tracking-tight">Build in one app to make instant reply with in lowest minutes</h1>
          <p className="pt-5 leading-9 md:text-xl text-base">get your test delivererd at home collect sample from the victory of management that supplies best design system with multiple features</p>
        </div>
        <div className="flex  mt-8 gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image className="w-[15px]" src={"/shape.png"} alt="logo" width={15} height={15} />
              <p>
                Medical and vesion
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image className="w-[15px]" src={"/shape.png"} alt="logo" width={15} height={15} />
              <p>
                Life insurence
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image className="w-[15px]" src={"/shape.png"} alt="logo" width={15} height={15} />
              <p>
                400(k) Savings
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image className="w-[15px]" src={"/shape.png"} alt="logo" width={15} height={15} />
              <p>HSA and FSA</p>
            </div>
            <div className="flex items-center gap-3">
              <Image className="w-[15px]" src={"/shape.png"} alt="logo" width={15} height={15} />
              <p>
                Computer benefits
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image className="w-[15px]" src={"/shape.png"} alt="logo" width={15} height={15} />
              <p>
                529 collage savings
              </p>
            </div>
          </div>
        </div>
        <Image className="pt-5" src={"/explor.png"} alt="logo" width={100} height={50} />
      </div>
      <Image src={"/image.png"} alt="logo" width={400} height={200} />




    </div>
  )
}