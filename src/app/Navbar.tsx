'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Image src="/group.png" alt="logo" width={20} height={20} />
                        <h1 className="ml-2 tracking-tight font-bold">StartupLand</h1>
                    </div>

                    <div className="hidden md:flex md:items-center md:gap-6">
                        <Link href="/Home" className="underline hover:text-[#f2d8ae]">Home</Link>
                        <Link href="/Advertise" className="underline hover:text-[#f2d8ae]">Advertise</Link>
                        <Link href="/Support" className="underline hover:text-[#f2d8ae]">Support</Link>
                        <Link href="/About" className="underline hover:text-[#f2d8ae]">About</Link>
                        <Link className="flex bg-[#fcf5ea] text-amber-500 rounded-lg p-2  w-[100px]" href={"/Get started"} > Get started</Link>


                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-800 hover:text-[#f2d8ae] focus:outline-none focus:text-[#f2d8ae]"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <nav className="px-4 py-2 flex flex-col justify-center items-center">
                        <Link href="/Home" className="block py-2 underline hover:text-[#f2d8ae]">Home</Link>
                        <Link href="/Advertise" className="block py-2 underline hover:text-[#f2d8ae]">Advertise</Link>
                        <Link href="/Support" className="block py-2 underline hover:text-[#f2d8ae]">Support</Link>
                        <Link href="/About" className="block py-2 underline hover:text-[#f2d8ae]">About</Link>
                        <Link className="flex bg-[#fcf5ea] text-amber-500 rounded-lg p-2  w-[100px]" href={"/Get started"} > Get started</Link>



                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;