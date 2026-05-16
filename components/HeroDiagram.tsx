"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ServiceData {
  id: number;
  title: string;
  content: string;
  type: string;
}

interface HeroDiagramProps {
  leftItems?: string[];
  rightItems?: string[];
}

export default function HeroDiagram({
  leftItems: fallbackLeft = [],
  rightItems: fallbackRight = []
}: HeroDiagramProps) {
  const [services, setServices] = useState<ServiceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/pages`)
      .then(res => res.json())
      .then(data => {
        setServices(data.services || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch services:", err);
        setLoading(false);
      });
  }, []);

  if (loading || services.length === 0) return null;

  // --- DYNAMIC DATA MAPPING ---
  // Derive items natively from the live backend services payload
  const dynamicLeftItems = services.map(s => s.type);
  const dynamicRightItems = services.map(s => s.title);

  // --- DYNAMIC MEASUREMENTS ---
  const cardWidth = 320;
  const cardHeight = 80;
  const cardGap = 40;

  const totalServices = services.length;
  const minSvgHeight = 800;
  const calculatedHeight = (totalServices * cardHeight) + ((totalServices - 1) * cardGap) + 200;
  const svgHeight = Math.max(minSvgHeight, calculatedHeight);
  const svgWidth = 1600;

  const chipWidth = 260;
  const chipHeight = 260;
  const chipX = (svgWidth - chipWidth) / 2;
  const chipY = (svgHeight - chipHeight) / 2;
  const chipCenterY = svgHeight / 2;

  const leftCardX = 40;
  const rightCardX = svgWidth - 40 - cardWidth;

  // --- MATH HELPERS BASED ON NEW ARRAY LENGTHS ---
  const getCardY = (index: number) => {
    const totalBlockHeight = (totalServices * cardHeight) + ((totalServices - 1) * cardGap);
    const startY = (svgHeight - totalBlockHeight) / 2;
    return startY + (index * (cardHeight + cardGap));
  };

  const getPortY = (index: number) => {
    if (totalServices === 1) return chipCenterY;
    const usableChipHeight = chipHeight - 60;
    const step = usableChipHeight / (totalServices - 1);
    const startY = chipCenterY - (usableChipHeight / 2);
    return startY + (index * step);
  };

  const getMidX = (index: number, side: 'left' | 'right') => {
    const distanceToEdge = Math.min(index, totalServices - 1 - index);
    const stagger = distanceToEdge * 25;
    const baseLeftLane = chipX - 35;
    const baseRightLane = chipX + chipWidth + 35;
    return side === 'left' ? baseLeftLane - stagger : baseRightLane + stagger;
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#092A12] via-[#020804] via-[70%] to-[#177350] border-b border-emerald-950/20 relative overflow-hidden">

      {/* Global Background Matrix */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0BC13E 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* ========================================================= */}
      {/* 1. MOBILE & SMALL TABLET LAYOUT (< 1024px)                 */}
      {/* ========================================================= */}
      <div className="flex lg:hidden flex-col items-center w-full px-6 py-16 gap-12 relative z-10">

        {/* Mobile Center Chip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-[200px] h-[200px] bg-[#041609] border-2 border-[#0BC13E] rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(11,193,62,0.2)] relative p-4"
        >
          <div className="absolute inset-2 border border-dashed border-[#CED4DC]/40 rounded-xl pointer-events-none" />
          <img
            src="/logo/logo.png"
            alt="Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(11,193,62,0.5)] select-none"
          />
        </motion.div>

        {/* Mobile Left Items (Capabilities mapped from backend) */}
        <div className="w-full max-w-md flex flex-col gap-4">
          <div className="flex items-center gap-4 mb-2 opacity-80">
            <div className="h-px bg-[#0BC13E] flex-grow"></div>
            <span className="text-[#0BC13E] font-bold tracking-widest uppercase text-xs">Capabilities</span>
            <div className="h-px bg-[#0BC13E] flex-grow"></div>
          </div>
          {dynamicLeftItems.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={`mob-left-${i}`}
              className="w-full flex items-center justify-center rounded-xl border border-[#0BC13E]/50 bg-[#041609]/95 px-6 py-5 text-white font-bold text-[16px] text-center shadow-[0_0_15px_rgba(11,193,62,0.1)]"
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Mobile Right Items (Solutions mapped from backend) */}
        <div className="w-full max-w-md flex flex-col gap-4 mt-8">
          <div className="flex items-center gap-4 mb-2 opacity-80">
            <div className="h-px bg-[#FFAE41] flex-grow"></div>
            <span className="text-[#FFAE41] font-bold tracking-widest uppercase text-xs">Solutions</span>
            <div className="h-px bg-[#FFAE41] flex-grow"></div>
          </div>
          {dynamicRightItems.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={`mob-right-${i}`}
              className="w-full flex items-center justify-center rounded-xl border border-[#FFAE41]/50 bg-[#1C1207]/95 px-6 py-5 text-white font-bold text-[16px] text-center shadow-[0_0_15px_rgba(255,174,65,0.1)]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. DESKTOP & LARGE TABLET LAYOUT (>= 1024px)               */}
      {/* ========================================================= */}
      <section className="hidden lg:flex w-full max-w-[1600px] mx-auto flex-col items-center justify-center relative z-10 px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full"
        >
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto drop-shadow-2xl">

            <defs>
              <linearGradient id="greenGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0BC13E" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0BC13E" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="orangeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFAE41" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFAE41" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* DYNAMIC LEFT PATHS & ANIMATED MARBLES (GREEN) */}
            {services.map((_, i) => {
              const cardY = getCardY(i);
              const cardCenterY = cardY + cardHeight / 2;
              let portY = getPortY(i);

              if (Math.abs(cardCenterY - portY) < 0.1) portY += 0.01;

              const midX = getMidX(i, 'left');
              const startX = leftCardX + cardWidth;
              const endX = chipX;

              const pathData = `M ${startX} ${cardCenterY} L ${midX} ${cardCenterY} L ${midX} ${portY} L ${endX} ${portY}`;

              return (
                <g key={`path-left-${i}`}>
                  <path d={pathData} fill="none" stroke="url(#greenGlow)" strokeWidth="2" opacity="0.6" />
                  <circle r="3.5" fill="#ffffff" filter="drop-shadow(0 0 5px #0BC13E)">
                    <animateMotion dur={`${2.5 + i * 0.2}s`} repeatCount="indefinite" path={pathData} />
                  </circle>
                  <rect x={midX - 3.5} y={cardCenterY - 3.5} width="7" height="7" fill="#0BC13E" />
                  <rect x={midX - 3.5} y={portY - 3.5} width="7" height="7" fill="#0BC13E" />
                  <circle cx={endX} cy={portY} r="4.5" fill="#0BC13E" className="animate-pulse" />
                </g>
              );
            })}

            {/* DYNAMIC RIGHT PATHS & ANIMATED MARBLES (ORANGE) */}
            {services.map((_, i) => {
              const cardY = getCardY(i);
              const cardCenterY = cardY + cardHeight / 2;
              let portY = getPortY(i);

              if (Math.abs(cardCenterY - portY) < 0.1) portY += 0.01;

              const midX = getMidX(i, 'right');
              const startX = rightCardX;
              const endX = chipX + chipWidth;

              const pathData = `M ${endX} ${portY} L ${midX} ${portY} L ${midX} ${cardCenterY} L ${startX} ${cardCenterY}`;

              return (
                <g key={`path-right-${i}`}>
                  <path d={pathData} fill="none" stroke="url(#orangeGlow)" strokeWidth="2" opacity="0.6" />
                  <circle r="3.5" fill="#ffffff" filter="drop-shadow(0 0 5px #FFAE41)">
                    <animateMotion dur={`${2.8 + i * 0.15}s`} repeatCount="indefinite" path={pathData} />
                  </circle>
                  <rect x={midX - 3.5} y={portY - 3.5} width="7" height="7" fill="#FFAE41" />
                  <rect x={midX - 3.5} y={cardCenterY - 3.5} width="7" height="7" fill="#FFAE41" />
                  <circle cx={endX} cy={portY} r="4.5" fill="#FFAE41" className="animate-pulse" />
                </g>
              );
            })}

            {/* Left Cards */}
            {services.map((service, index) => (
              <foreignObject key={`card-left-${index}`} x={leftCardX} y={getCardY(index)} width={cardWidth} height={cardHeight}>
                <div className="w-full h-full flex items-center justify-center rounded-xl border border-[#0BC13E]/50 bg-[#041609]/95 hover:border-[#0BC13E] hover:shadow-[0_0_25px_rgba(11,193,62,0.3)] transition-all px-6 text-white font-bold text-[18px] text-center select-none cursor-pointer z-20 relative">
                  {service.type}
                </div>
              </foreignObject>
            ))}

            {/* Right Cards */}
            {services.map((service, index) => (
              <foreignObject key={`card-right-${index}`} x={rightCardX} y={getCardY(index)} width={cardWidth} height={cardHeight}>
                <div className="w-full h-full flex items-center justify-center rounded-xl border border-[#FFAE41]/50 bg-[#1C1207]/95 hover:border-[#FFAE41] hover:shadow-[0_0_25px_rgba(255,174,65,0.3)] transition-all px-6 text-white font-bold text-[18px] text-center select-none cursor-pointer z-20 relative">
                  {service.title}
                </div>
              </foreignObject>
            ))}

            {/* Center Chip */}
            <foreignObject x={chipX} y={chipY} width={chipWidth} height={chipHeight}>
              <div className="w-full h-full bg-[#041609] border-2 border-[#0BC13E] rounded-2xl flex items-center justify-center shadow-[0_0_60px_rgba(11,193,62,0.15)] relative p-2 z-20">
                <div className="absolute inset-1 border border-dashed border-[#CED4DC]/40 rounded-xl p-4 pointer-events-none" />
                <div className="w-full h-full flex items-center justify-center p-4 relative">
                  <img
                    src="/logo/logo.png"
                    alt="Logo"
                    className="max-w-full max-h-full w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(11,193,62,0.5)] transition-all duration-300 hover:scale-105 select-none pointer-events-auto"
                  />
                </div>
              </div>
            </foreignObject>

          </svg>
        </motion.div>
      </section>
    </div>
  );
}