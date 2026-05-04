"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";

// Data mapping for the exact structure seen in the reference image
const serviceCategories = [
    {
        id: "truss-fab",
        label: "STEEL TRUSS FABRICATION",
        description: "High-precision structural steel framing and trusses, factory-engineered to guarantee exact dimensions, long-term durability, and rapid on-site assembly.",
        image: "/services/Steel Truss Fabrication.jpg",
    },
    {
        id: "residential",
        label: "RESIDENTIAL",
        description: "Expertly crafted, durable residential roofing solutions. We handle everything from trusses to final premium tiling, ensuring your home is protected for generations.",
        image: "/services/Residential Roofing.jpg",
    },
    {
        id: "commercial",
        label: "COMMERCIAL",
        description: "Scalable and robust roofing systems for warehouses, factories, and commercial complexes, engineered for speed and uncompromising structural integrity.",
        image: "/services/Commercial Roofing.jpg",
    },
    {
        id: "trusses",
        label: "STEEL FRAMING",
        description: "High-precision structural steel framing and trusses, factory-engineered to guarantee exact dimensions, durability, and rapid on-site assembly.",
        image: "/services/Steel Truss Fabrication.jpg",
    },
    {
        id: "waterproofing",
        label: "WATERPROOFING",
        description: "State-of-the-art waterproofing solutions designed to protect your structural investments from the harshest weather conditions.",
        image: "/services/Advanced Waterproofing.jpg",
    },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 ${(isScrolled || isDropdownOpen)
                ? "bg-white border-b border-gray-200 shadow-sm py-0"
                : "bg-transparent border-transparent py-4"
                }`}
        >
            {/* Main Navbar Container */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative">
                <div className="flex justify-between items-center h-20">

                    {/* Logo (Left) */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="block">
                            <Image
                                src={(isScrolled || isDropdownOpen) ? "/logo/logo.png" : "/logo/logo-w.png"}
                                alt="Bayroof Constructions"
                                width={220}
                                height={60}
                                className="transition-all duration-300 w-auto h-16 object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Navigation Links (Center/Right) */}
                    <div className="hidden lg:flex items-center space-x-8 h-full">
                        <Link
                            href="/"
                            className={`font-medium transition-colors hover:text-gold ${(isScrolled || isDropdownOpen) ? "text-deep-navy" : "text-white"
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`font-medium transition-colors hover:text-gold ${(isScrolled || isDropdownOpen) ? "text-deep-navy" : "text-white"
                                }`}
                        >
                            About
                        </Link>

                        {/* Mega Menu Trigger */}
                        <div
                            className="flex items-center h-full cursor-pointer group"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button
                                className={`flex items-center font-medium transition-colors focus:outline-none group-hover:text-gold ${(isScrolled || isDropdownOpen) ? "text-deep-navy" : "text-white"
                                    }`}
                            >
                                Services <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-gold' : ''}`} />
                            </button>

                            {/* The Dropdown Panel (Modulex Style) */}
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t-[3px] border-gold flex px-20 -mt-[1px] cursor-default">

                                    {/* Column 1: Vertical Tabs (Left) */}
                                    <div className="w-[280px] border-l border-r border-gray-200 flex flex-col">
                                        {serviceCategories.map((category) => (
                                            <button
                                                key={category.id}
                                                onMouseEnter={() => setActiveCategory(category)}
                                                className={`w-full text-left px-8 py-5 border-b border-gray-100 text-[14px] font-semibold tracking-wide transition-colors ${activeCategory.id === category.id
                                                    ? "text-gold" // Matches the Red text in the reference
                                                    : "text-deep-navy hover:text-gold"
                                                    }`}
                                            >
                                                {category.label}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Column 2: Text Description & CTA (Middle) */}
                                    <div className="w-[360px] p-12 flex flex-col justify-center">
                                        <p className="text-murky-green font-normal text-[15px] leading-relaxed mb-8">
                                            {activeCategory.description}
                                        </p>
                                        <div className="flex items-center">
                                            <span className="text-deep-navy font-medium mr-4">Know More</span>
                                            <Link
                                                href="/contact"
                                                className="flex items-center justify-center w-10 h-10 bg-gold text-white hover:bg-deep-navy transition-colors"
                                            >
                                                <ArrowUpRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Column 3: Feature Image (Right) */}
                                    <div className="flex-1 p-12 flex items-center justify-center">
                                        {/* Placeholder for Next.js Image component */}
                                        <div className="w-full h-full min-h-[280px] bg-ice-blue border border-gray-200 flex items-center justify-center overflow-hidden relative">
                                            {/* <span className="text-murky-green font-medium text-sm z-10">
                                                [ Image for {activeCategory.label} ]
                                            </span> */}
                                            {/*Once you add images to the public folder, uncomment this:*/}
                                            <Image
                                                src={activeCategory.image}
                                                alt={activeCategory.label}
                                                fill
                                                className="object-cover"
                                            />


                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>

                        <Link
                            href="/gallery"
                            className={`font-medium transition-colors hover:text-gold ${(isScrolled || isDropdownOpen) ? "text-deep-navy" : "text-white"
                                }`}
                        >
                            Gallery
                        </Link>
                        {/* Merged Contact CTA */}
                        <div className="ml-8 h-full flex items-center">
                            <Link
                                href="/contact"
                                className="group flex items-center"
                                aria-label="Contact Us"
                            >
                                <span
                                    className={`font-medium transition-colors mr-4 group-hover:text-gold ${(isScrolled || isDropdownOpen) ? "text-deep-navy" : "text-white"
                                        }`}
                                >
                                    Contact
                                </span>
                                <div className="flex items-center justify-center w-10 h-10 bg-gold text-white transition-colors">
                                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={(isScrolled || isDropdownOpen) ? "text-deep-navy" : "text-white"}
                        >
                            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}