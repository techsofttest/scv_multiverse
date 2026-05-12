'use client';

import Link from 'next/link';
import Image from 'next/image';
import { LinkedinIcon as Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import { useGlobalData } from '../context/GlobalDataContext';

export default function Footer() {
    const globalData = useGlobalData();
    const contacts = globalData?.contacts;
    const loading = globalData?.loading ?? true;

    const socialLinks = [
        { Icon: Linkedin, href: contacts.linkedin },
        { Icon: Facebook, href: contacts.facebook },
        { Icon: Instagram, href: contacts.instagram },
        { Icon: Youtube, href: contacts.youtube },
    ].filter(link => link.href); // Only include if URL exists
    if (loading || !contacts) return null;
    return (
        <footer className="w-full bg-white pt-20 pb-10 font-sans border-t border-gray-100 relative z-40">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

                {/* TOP ROW: Main Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-gray-100">

                    {/* Column 1: Quick Links */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">Quick Links</h4>
                        <nav className="flex flex-col space-y-4">
                            <Link href="/" className="text-deep-navy hover:text-gold transition-colors text-[15px] font-medium">Home</Link>
                            <Link href="/about" className="text-deep-navy hover:text-gold transition-colors text-[15px] font-medium">About Us</Link>
                            <Link href="/gallery" className="text-deep-navy hover:text-gold transition-colors text-[15px] font-medium">Gallery</Link>
                            <Link href="/contact" className="text-deep-navy hover:text-gold transition-colors text-[15px] font-medium">Contact</Link>
                        </nav>
                    </div>

                    {/* Column 2: Contact Us */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">Contact Us</h4>
                        <div className="flex flex-col space-y-4">
                            <a
                                href={`tel:${contacts.phone}`}
                                className="text-deep-navy hover:text-gold transition-colors text-[15px] font-medium"
                            >
                                {contacts.phone}
                            </a>
                            <a
                                href={`mailto:${contacts.email}`}
                                className="text-deep-navy hover:text-gold transition-colors text-[15px] font-medium break-all"
                            >
                                {contacts.email}
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Head Office */}
                    <div className="flex flex-col space-y-6 lg:border-l lg:border-gray-100 lg:pl-12">
                        <h4 className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">Head Office</h4>
                        <address className="not-italic text-deep-navy text-[15px] font-medium leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: contacts.address }}>
                        </address>
                    </div>

                    {/* Column 4: Location Details */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">Regional Presence</h4>
                        <p className="text-deep-navy text-[15px] font-medium leading-relaxed">
                            Serving premium residential and commercial turnkey roofing projects across Kerala.
                        </p>
                    </div>

                </div>

                {/* MIDDLE ROW: Social & Policy Links */}
                <div className="flex flex-col md:flex-row justify-between items-center py-10 space-y-8 md:space-y-0">
                    <div className="flex items-center space-x-8">
                        <h4 className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">Follow Us</h4>
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

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        <Link href="/privacy-policy" className="text-gray-400 hover:text-deep-navy text-[13px] font-medium transition-colors">Privacy Policy</Link>
                        <Link href="/cookie-policy" className="text-gray-400 hover:text-deep-navy text-[13px] font-medium transition-colors">Cookie Policy</Link>
                        <Link href="/terms-and-conditions" className="text-gray-400 hover:text-deep-navy text-[13px] font-medium transition-colors">Terms and Conditions</Link>
                    </div>
                </div>

                {/* BOTTOM ROW: Logo & Mission Statement */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 border-t border-gray-100 space-y-8 lg:space-y-0">
                    <div className="flex-shrink-0">
                        <Link href="/" className="block">
                            <Image
                                src="/logo/logo.png"
                                alt="Bayroof Constructions"
                                width={300}
                                height={75}
                                className="w-auto h-18 object-contain"
                            />
                        </Link>
                    </div>

                    <div className="max-w-2xl">
                        <p className="text-gray-400 text-[12px] leading-relaxed lg:text-right">
                            BAYROOF CONSTRUCTIONS is a leader in Turnkey Roofing Solutions.
                            We are dedicated to modern methods of construction, ensuring structural
                            integrity and precision engineering through Light Gauge Steel Frame Technology
                            and premium materials.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}