"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { LinkedinIcon as Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import { ChevronDown, ArrowUpRight, Menu, X, Plus, Minus } from "lucide-react";
import { useGlobalData } from "../context/GlobalDataContext";

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    slug: string;
}

export default function Navbar() {
    const globalData = useGlobalData();
    const contact = globalData?.contacts;
    const loading = globalData?.loading ?? true;
    const services: Service[] = globalData?.services || [];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<Service | null>(null);
const socialLinks = [
        { Icon: Linkedin, href: contact.linkedin },
        { Icon: Facebook, href: contact.facebook },
        { Icon: Instagram, href: contact.instagram },
        { Icon: Youtube, href: contact.youtube },
    ].filter(link => link.href); 
    useEffect(() => {
        if (services.length > 0) setActiveCategory(services[0]);
    }, [services]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const navColorClass = (isScrolled || isDropdownOpen || isMobileMenuOpen) 
        ? "text-deep-navy" 
        : "text-white";
if (loading || !contact) return null;
    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
                (isScrolled || isDropdownOpen || isMobileMenuOpen) 
                ? "bg-white border-b border-gray-200 shadow-sm py-0" 
                : "bg-transparent border-transparent py-4"
            }`}>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative">
                    <div className="flex justify-between items-center h-20">
                        
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                <Image 
                                    src={(isScrolled || isDropdownOpen || isMobileMenuOpen) ? "/logo/logo.png" : "/logo/logo-w.png"}
                                    alt="Bayroof Constructions"
                                    width={180}
                                    height={50}
                                    className="w-auto h-12 lg:h-16 object-contain"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center space-x-8 h-full">
                            <Link href="/" className={`font-medium hover:text-gold ${navColorClass}`}>Home</Link>
                            <Link href="/about" className={`font-medium hover:text-gold ${navColorClass}`}>About</Link>

                            {/* Mega Menu Trigger */}
                            <div className="flex items-center h-full cursor-pointer group"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}>
                                <button className={`flex items-center font-medium group-hover:text-gold ${navColorClass}`}>
                                    Services <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180 text-gold' : ''}`} />
                                </button>

                                {isDropdownOpen && services.length > 0 && (
                                    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t-[3px] border-gold flex px-20 -mt-[1px]">
                                        <div className="w-[280px] border-l border-r border-gray-100 flex flex-col">
                                            {services.map((s) => (
                                                <button key={s.id} onMouseEnter={() => setActiveCategory(s)}
                                                    className={`w-full text-left px-8 py-5 border-b border-gray-50 text-[14px] font-semibold ${activeCategory?.id === s.id ? "text-gold" : "text-deep-navy hover:text-gold"}`}>
                                                    {s.title}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="w-[360px] p-12 flex flex-col justify-center">
                                            <p className="text-murky-green text-[15px] mb-8">{activeCategory?.description}</p>
                                            <Link href={`/services`} className="flex items-center group/link">
                                                <span className="text-deep-navy font-bold mr-4">Explore Service</span>
                                                <div className="w-10 h-10 bg-gold text-white flex items-center justify-center group-hover/link:bg-deep-navy transition-colors">
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="flex-1 p-12 relative min-h-[300px]">
                                            {activeCategory?.image && (
                                                <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${activeCategory.image}`} alt={activeCategory.title} fill className="object-cover" />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link href="/gallery" className={`font-medium hover:text-gold ${navColorClass}`}>Gallery</Link>
                            <Link href="/contact" className="ml-8 group flex items-center">
                                <span className={`font-medium mr-4 group-hover:text-gold ${navColorClass}`}>Contact</span>
                                <div className="w-10 h-10 bg-gold text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </Link>
                        </div>

                        {/* Mobile Toggle Button */}
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-2 z-[70] ${navColorClass}`}>
                            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- MOBILE SIDEBAR --- */}
            {/* Overlay */}
            <div className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsMobileMenuOpen(false)} />

            {/* Sidebar Drawer */}
            <aside className={`fixed top-0 right-0 h-full w-[80%] sm:w-[350px] bg-white z-[58] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col h-full pt-24 px-8 pb-10 overflow-y-auto">
                    
                    <div className="flex flex-col space-y-6">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-deep-navy border-b border-gray-100 pb-4">Home</Link>
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-deep-navy border-b border-gray-100 pb-4">About Us</Link>
                        
                        {/* Mobile Services Accordion */}
                        <div className="border-b border-gray-100 pb-4">
                            <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="flex items-center justify-between w-full text-xl font-bold text-deep-navy">
                                Services {isMobileServicesOpen ? <Minus className="text-gold w-5 h-5" /> : <Plus className="text-gold w-5 h-5" />}
                            </button>
                            
                            <div className={`mt-4 space-y-4 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                                {services.map((s) => (
                                    <Link key={s.id} href={`/services/${s.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 text-murky-green hover:text-gold font-medium">
                                        • {s.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-deep-navy border-b border-gray-100 pb-4">Gallery</Link>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-deep-navy border-b border-gray-100 pb-4">Contact</Link>
                    </div>

                    {/* Footer of Sidebar */}
                    <div className="mt-auto pt-10">
                        <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest">Enquiries</p>
                        <a href={`mailto:${contact.email}`} className="text-deep-navy font-bold hover:text-gold block">{contact.email}</a>
                        <div className="flex space-x-5">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-deep-navy transition-colors"
                                >
                                    <link.Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}