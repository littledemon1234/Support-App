import Image from "next/image";



export default function Features() {
    return (
        <div className=" flex md:flex-row gap-5 flex-col xl:pl-40 xl:pr-44 md:pt-24">
            <div className=" drop-shadow-2xl">
                <div className=" flex gap-2 p-8 ">
                    {/* image div */}
                    <div className="mb-7 w-[160px] md:w-[150px] h-[50px] md:h-[70px] grid place-items-center bg-[#FFC059] rounded-3xl">
                        <Image src={"/Group 82.png"} alt="logo" width={25} height={20} />
                    </div>
                    <div>

                        <h1 className="text-xl leading-normal font-bold ">Do you need help support</h1>
                        <p className="leading-7">Get your website app test delivered at let collect samples from  the victory of the update managment services.</p>
                    </div>
                </div>
            </div>
            <div className=" flex gap-2 bg-[#F6F8FB] p-8 ">
                {/* image div */}
                <div className="mb-7 w-[160px] md:w-[150px] md:h-[70px] h-[50px] grid place-items-center bg-[#FFC059] rounded-3xl">
                    <Image src={"/Group 82.png"} alt="logo" width={25} height={20} />
                </div>

                <div>
                    <h1 className="text-xl leading-normal font-bold ">Do you need help support</h1>
                    <p className="leading-7">Get your website app test delivered at let collect samples from the victory of the update managment services.</p>
                </div>
            </div>




























        </div>
    );
}