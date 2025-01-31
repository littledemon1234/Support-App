import Link from 'next/link';
import React from 'react';

const footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="md:text-2xl text-xl font-semibold">
                    Subscribe to get notified about update
                </h2>
                <p className="mt-4 text-gray-400 md:text-[14px] text-[12px]">
                    By subscribing with your mail, you will accept our privacy policy
                </p>
                <form className="mt-8 flex flex-row justify-center">
                    <div className='flex md:flex-row items-center flex-col gap-3'>
                        <div className=''>
                            <input
                                type="email"
                                className="bg-[#353448] ml-[10px] mr-[10px] md:mr-0 md:ml-0 p-2  w-[290px] text-start  rounded-none border outline-none md:rounded-l-md focus:outline-none border-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent "
                                placeholder="Enter your email"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-yellow-500   hover:bg-yellow-600  w-[150px] md:w-auto text-gray-800 font-semibold p-2 rounded-xl md:rounded-l-md"
                        >
                            Subscribe us
                        </button>
                    </div>
                </form>
            </div>
            <div className="mt-12 flex flex-col items-center text-center text-sm space-y-6">
                <div className="flex flex-col items-center space-y-2 text-gray-500">
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12.5A5.5 5.5 0 1115.5 10 5.5 5.5 0 0110 15.5zm.25-9a.75.75 0 00-1.5 0v2.25H6.5a.75.75 0 000 1.5h2.25V12.5a.75.75 0 001.5 0V9.75H13a.75.75 0 000-1.5h-2.75z" />
                        </svg>
                        <span className="md:text-lg text-sm font-semibold">StartupLanding</span>
                    </div>
                    <p className='md:text-sm text-xs'>© 2024 StartupLanding, Inc</p>
                </div>
                <div className="flex flex-wrap md:flex-nowrap justify-center space-x-4 text-gray-400">
                    <Link href="#home" className="hover:underline">Home</Link>
                    <Link href="#advertise" className="hover:underline">Advertise</Link>
                    <Link href="#supports" className="hover:underline">Supports</Link>
                    <Link href="#marketing" className="hover:underline">Marketing</Link>
                    <div className=' ml-0' >
                        <Link href="#faq" className="hover:underline">FAQ</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default footer;
