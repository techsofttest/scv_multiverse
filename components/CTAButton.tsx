import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface CTAButtonProps {
    href: string;
    text: string;
    className?: string;
}

export default function CTAButton({ href, text, className = "" }: CTAButtonProps) {
    return (
        <Link
            href={href}
            className={`group flex items-stretch shadow-2xl hover:scale-105 transition-transform duration-300 max-w-full ${className}`}
        >
            <div className="flex items-center justify-center bg-gold text-white font-semibold px-6 sm:px-10 py-4 text-sm sm:text-[16px] group-hover:bg-white group-hover:text-deep-navy transition-colors whitespace-nowrap">
                {text}
            </div>
            <div className="flex items-center justify-center bg-gold border-l border-white/20 text-white px-4 sm:px-5 group-hover:bg-white group-hover:text-deep-navy transition-colors">
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
        </Link>
    );
}
