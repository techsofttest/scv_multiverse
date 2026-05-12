"use client";

interface StructureGridProps {
    variant?: 'light' | 'dark';
}

export default function StructureGrid({ variant = 'light' }: StructureGridProps) {
    const lineColor = variant === 'light' ? 'bg-gray-100' : 'bg-white/10';
    const subLineColor = variant === 'light' ? 'bg-gray-100/50' : 'bg-white/5';

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-20 relative">
                {/* Main vertical lines aligned with content margins */}
                <div className={`absolute left-6 lg:left-20 top-0 bottom-0 w-[1px] ${lineColor}`} />
                <div className={`absolute right-6 lg:right-20 top-0 bottom-0 w-[1px] ${lineColor}`} />
                
                {/* Internal structural lines for symmetry (Table feel) */}
                <div className={`absolute left-1/4 top-0 bottom-0 w-[1px] ${subLineColor}`} />
                <div className={`absolute left-1/2 top-0 bottom-0 w-[1px] ${subLineColor}`} />
                <div className={`absolute left-3/4 top-0 bottom-0 w-[1px] ${subLineColor}`} />
            </div>
        </div>
    );
}
