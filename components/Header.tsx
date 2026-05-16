"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-[#08150f] border-b border-transparent relative z-50">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-4 md:py-6 flex items-center justify-between">

                {/* Left Side: Logo & Navigation Group */}
                <div className="flex items-center gap-4 md:gap-8">
                    {/* Logo */}
                    <div className="shrink-0 w-14 h-14 md:w-24 md:h-24 relative">
                        <Image
                            src="/logo/logo.png"
                            alt="SCV Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Company Name & Nav */}
                    <div className="flex flex-col gap-1 md:gap-2">
                        <h1 className="text-xl md:text-3xl font-bold tracking-wide text-white uppercase leading-tight">
                            SCV Multiverse System <span className="text-gray-400">LLC</span>
                        </h1>

                        {/* Gradient Line Divider */}
                        <div className="hidden md:block h-[2px] w-full bg-gradient-to-r from-[#0BC13E] to-transparent opacity-70 mb-1"></div>

                        {/* Navigation (Desktop) */}
                        <nav className="hidden md:flex gap-8 text-sm font-semibold">
                            <Link
                                href="/"
                                className={`${pathname === '/' ? 'text-white' : 'text-gray-400'} hover:text-[#0BC13E] transition-colors`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className={`${pathname === '/about' ? 'text-white' : 'text-gray-400'} hover:text-[#0BC13E] transition-colors`}
                            >
                                About
                            </Link>
                            <Link
                                href="/services"
                                className={`${pathname === '/services' ? 'text-white' : 'text-gray-400'} hover:text-[#0BC13E] transition-colors`}
                            >
                                Services
                            </Link>
                            <Link
                                href="/products"
                                className={`${pathname === '/products' ? 'text-white' : 'text-gray-400'} hover:text-[#0BC13E] transition-colors`}
                            >
                                Products
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Right Side: Desktop Contact Button & Mobile Burger Button */}
                <div className="flex items-center">
                    {/* Desktop Contact Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-[#0BC13E] hover:text-white transition-all shadow-md"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Burger Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none text-white"
                        aria-label="Toggle navigation menu"
                    >
                        <span
                            className={`h-[3px] w-7 bg-white rounded-full transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                                }`}
                        />
                        <span
                            className={`h-[3px] w-7 bg-white rounded-full transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                        />
                        <span
                            className={`h-[3px] w-7 bg-white rounded-full transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Navigation */}
            <div
                className={`absolute left-0 right-0 top-full bg-[#08150f]/98 backdrop-blur-md border-b border-[#0BC13E]/20 transition-all duration-300 ease-in-out z-40 overflow-hidden ${isMenuOpen ? 'max-h-[350px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
                    }`}
            >
                <nav className="flex flex-col items-center gap-5 text-base font-semibold px-6">
                    <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={`${pathname === '/' ? 'text-[#0BC13E]' : 'text-gray-300'} hover:text-[#0BC13E] transition-colors w-full text-center py-2 border-b border-white/5`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setIsMenuOpen(false)}
                        className={`${pathname === '/about' ? 'text-[#0BC13E]' : 'text-gray-300'} hover:text-[#0BC13E] transition-colors w-full text-center py-2 border-b border-white/5`}
                    >
                        About
                    </Link>
                    <Link
                        href="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className={`${pathname === '/services' ? 'text-[#0BC13E]' : 'text-gray-300'} hover:text-[#0BC13E] transition-colors w-full text-center py-2 border-b border-white/5`}
                    >
                        Services
                    </Link>
                    <Link
                        href="/products"
                        onClick={() => setIsMenuOpen(false)}
                        className={`${pathname === '/products' ? 'text-[#0BC13E]' : 'text-gray-300'} hover:text-[#0BC13E] transition-colors w-full text-center py-2 border-b border-white/5`}
                    >
                        Products
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-[#0BC13E] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#0BC13E]/80 transition-all shadow-md w-full text-center mt-2"
                    >
                        Contact Us
                    </Link>
                </nav>
            </div>
        </header>
    );
}