'use client';

import React from 'react'
import Slide from './assets/slide.png'
import Tick from './assets/tick.png'
import Image from 'next/image'
import Cross from './assets/cross.png'
import Link from 'next/link'
import { useState } from 'react';

const Pricing = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <div className='flex flex-col gap-5 pt-12 bg-[#F9FAFC] '>
                <div className='flex flex-col items-center'>
                    <h2 className='font-bold md:text-2xl text-xl pl-[5px] pr-[5px] tarcking-tight '>What deal suit you perfect</h2>
                    <h4 className='text-[#858B91]'>Meet our pricing plan</h4>
                </div>
                <div className='flex flex-col gap-[50px]'>
                    <div className="flex justify-center items-center space-x-2 cursor-pointer">
                        <span className="text-black-600">Monthly Plan</span>
                        <div
                            className={`relative w-10 flex flex-row items-center h-6 bg-[#FFC059] rounded-full ${isChecked ? 'bg-[#FFC059]' : 'bg-[#FFC059]'
                                }`}
                            onClick={handleToggle}
                        >
                            <span
                                className={`absolute left-0 w-5 h-5 bg-white rounded-full transform transition-transform ${isChecked ? 'translate-x-full' : 'translate-x-0'
                                    }`}
                            ></span>
                        </div>
                        <span className="text-black-600">Annual Plan</span>
                    </div>
                    <div className='flex flex-col md:pl-[21px] justify-center gap-[17px] md:flex md:flex-row '>
                        <div className='bg-white ml-[15px] md:ml-0 mr-[15px] md:mr-0 items-center text-[#E0E2E4] shadow-xl border-[2px] rounded-2xl border-transparent  md:rounded-tl-2xl md:rounded-br-2xl  h-[639px]  md:p-[28px] md:w-[480px] p-[11px] md:h-[600px]'>
                            <div className='flex flex-col gap-8 md:ml-0 md:mt-0 mt-[10px] ml-[21px]'>
                                <div>
                                    <h1 className='text-black font-bold text-[20px] md:pt-0 pt-6'>Startup Pack</h1>
                                    <p className='text-[#FFC059] font-bold text-[20px]'>$25.99/mo</p>
                                </div>
                                <p className='text-[#343D48]'>For the startup team who work with new come data</p>
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
                                <Link className='font-semibold flex bg-[#ffe6c0] text-[#FFC059] w-[160px] h-[45px] flex-row justify-center items-center md:text-[18px] text-[14px] rounded-lg' href='/'>Start Free Trial</Link>
                            </div>
                        </div>

                        <div className='bg-white md:mr-[21px] text-[#E0E2E4] shadow-xl border-[2px] border-transparent  md:rounded-tl-2xl md:rounded-br-2xl rounded-2xl  ml-[15px] mr-[15px] h-[639px]  md:p-[28px] p-[11px] md:w-[480px] md:h-[600px]'>
                            <div className='flex flex-col gap-8 pl-[21px] md:p-0 pt-[10px] md:pt-0'>
                                <div>
                                    <h1 className='text-black font-bold md:text-[20px] text-[15px] pt-6 md:pt-0'>Premium Pack</h1>
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
                                <Link className='font-semibold flex bg-[#FFC059] text-white w-[160px] h-[45px] flex-row justify-center items-center md:text-[18px] text-[14px] rounded-xl' href='/'>Start Free Trial</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pricing;