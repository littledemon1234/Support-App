import React from 'react'
import Slide from './assets/slide.png'
import Tick from './assets/tick.png'
import Image from 'next/image'
import Cross from './assets/cross.png'
import Link from 'next/link'
const pricing = () => {
    return (
        <>
            <div className='flex flex-col gap-5 pt-12 bg-[#F9FAFC] '>
                <div className='flex flex-col items-center'>
                    <h2 className='font-bold text-2xl'>What deal suit you perfect</h2>
                    <h4 className='text-[#858B91]'>Meet our pricing plan</h4>
                </div>
                <div className='flex flex-col gap-[50px]'>
                    <div className='flex flex-row justify-center'>
                        <p>Monthly Plan</p>
                        <Image className='w-[30px] h-[30px]' src={Slide} alt="" />
                        <p>Annual plan</p>
                    </div>
                    <div className='flex flex-col justify-center gap-[7px] md:flex md:flex-row'>
                        <div className='bg-white text-[#E0E2E4] shadow-xl border-[2px] border-transparent  rounded-tl-2xl rounded-br-2xl  h-[700px] p-0 md:p-[50px] md:w-[480px] md:h-[600px]'>
                            <div className='flex flex-col gap-8 md:ml-0 md:mt-0 mt-[10px] ml-[21px]'>
                                <div>
                                    <h1 className='text-black font-bold text-[20px]'>Startup Pack</h1>
                                    <p className='text-[#FFC059] font-bold text-[20px]'>$25.99/mo</p>
                                </div>
                                <p className='text-[#343D48]'>For the startup team who work with new come data stack</p>

                                <div className='flex flex-col  gap-6'>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <Image className='w-[20px] h-[20px] ' src={Tick} alt="" />
                                        <p className='text-black'>Ultimate access to all course, exercises and assessments</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <Image className='w-[20px] h-[20px] ' src={Tick} alt="" />
                                    <p className='text-black'>Free acess for all kind of exercise corrections with downloads.</p>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <Image className='w-[20px] h-[20px] ' src={Tick} alt="" />
                                    <p className='text-black'>Total assessment corrections with free download access system</p>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <Image className='w-[20px] h-[20px] ' src={Cross} alt="" />
                                    <p className='text-[#343D48]'>Unlimited download of courses on the mobile app contents</p>
                                </div>
                                <Link className='font-semibold flex bg-[#ffe6c0] text-[#FFC059] w-[160px] h-[45px] flex-row justify-center items-center text-[18px] rounded-lg' href='/'>Start Free Trial</Link>
                            </div>
                        </div>

                        <div className='bg-white text-[#E0E2E4] shadow-xl border-[2px] border-transparent  rounded-tl-2xl rounded-br-2xl  h-[700px] p-0 md:p-[50px] md:w-[480px] md:h-[600px]'>
                            <div className='flex flex-col gap-8 pl-[21px] md:p-0 pt-[10px] md:pt-0'>
                                <div>
                                    <h1 className='text-black font-bold text-[20px]'>Premium Pak</h1>
                                    <p className='text-[#FFC059] font-bold text-[20px]'>$49.99/mo</p>
                                </div>
                                <p className='text-[#343D48] '>For the Pro users who work with modern data stack</p>

                                <div className='flex flex-col  gap-6'>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <Image className='w-[20px] h-[20px] ' src={Tick} alt="" />
                                        <p className='text-black'>Ultimate access to all course, exercises and assessments</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <Image className='w-[20px] h-[20px] ' src={Tick} alt="" />
                                    <p className='text-black'>Free acess for all kind of exercise corrections with downloads.</p>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <Image className='w-[20px] h-[20px] ' src={Tick} alt="" />
                                    <p className='text-black'>Total assessment corrections with free download access system</p>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <Image className='w-[20px] h-[20px] ' src={Tick} alt="" />
                                    <p className='text-black'>Unlimited download of courses on the mobile app contents</p>
                                </div>
                                <Link className='font-semibold flex bg-[#FFC059] text-white w-[160px] h-[45px] flex-row justify-center items-center text-[18px] rounded-xl' href='/'>Start Free Trial</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>


    )
}

export default pricing