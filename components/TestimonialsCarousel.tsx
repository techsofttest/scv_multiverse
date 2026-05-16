'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

interface Testimonial {
  title: string;
  quote: string;
  author: string;
  role: string;
  image: string;
}

const topTestimonials: Testimonial[] = [
  {
    title: 'Exceptional operational resilience',
    quote: '"SMG has fundamentally transformed how we handle our deep-water asset maintenance. Their rapid deployment and precision engineering meant zero unexpected downtime for our rigs this entire operational year."',
    author: 'Sarah Jenkins',
    role: 'QA Engineer',
    image: '/mock/profile1.png',
  },
  {
    title: 'Game-changing automation',
    quote: '"Integrating SMG\'s custom robotics into our material handling processes was seamless. It not only increased our daily throughput but drastically improved safety conditions for our floor engineers."',
    author: 'David Chen',
    role: 'Director of Industrial Automation',
    image: '/mock/profile2.png',
  },
  {
    title: 'Precision Structural Integrity',
    quote: '"Their tailored robotics solutions and subsea engineering packages have set a new industry benchmark. It allowed us to execute underwater inspections in half the normal schedule."',
    author: 'Elena Rostova',
    role: 'Lead Offshore Supervisor',
    image: '/mock/profile3.png',
  },
];

const bottomTestimonials: Testimonial[] = [
  {
    title: 'Flawless safety and inspection',
    quote: '"When it comes to high-risk structural inspections, SMG\'s rope access and NDT teams are unmatched. Their real-time data analysis gives us total confidence in the health of our renewable infrastructure."',
    author: 'Marcus V.',
    role: 'QA Engineer',
    image: '/mock/profile4.png',
  },
  {
    title: 'A true engineering partner',
    quote: '"We needed to rapidly scale our equipment refurbishment without compromising our strict compliance standards. SMG provided the technical expertise and the execution to make it happen flawlessly."',
    author: 'Manuel P.',
    role: 'QA Engineer',
    image: '/mock/profile5.png',
  },
  {
    title: 'Superb project execution',
    quote: '"From initial engineering designs to physical mobilization, SCV executed our platform overhaul with outstanding professionalism and absolute adherence to our aggressive safety targets."',
    author: 'Jameson Finch',
    role: 'Chief Operations Officer',
    image: '/mock/profile6.png',
  },
];

// Reusable Row Component that handles Draggable, Auto-Scroll, and Pause on Hover
function TestimonialRow({ testimonials, speed }: { testimonials: Testimonial[]; speed: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isDraggingRef = useRef(false);
  const [rowWidth, setRowWidth] = useState(0);

  // Triple the items to ensure seamless visual continuation while dragging/scrolling
  const duplicatedItems = [...testimonials, ...testimonials, ...testimonials];

  const x = useMotionValue(0);

  // Update row width when rendered or resized
  useEffect(() => {
    if (trackRef.current) {
      // The scrollWidth divided by 3 gives us the exact length of a single set
      setRowWidth(trackRef.current.scrollWidth / 3);
    }
  }, [testimonials]);

  // Continuously update position using requestAnimationFrame
  useAnimationFrame((time, delta) => {
    if (isHovered || isDraggingRef.current || !rowWidth) return;

    // Standardize delta or use static increment based on speed
    const currentX = x.get();
    let nextX = currentX + speed;

    // Wrapping boundary logic to keep the carousel looping infinitely
    if (speed < 0) {
      // Right to Left: if we scrolled past the first duplicated block, reset back by one row width
      if (nextX <= -rowWidth) {
        nextX += rowWidth;
      }
    } else {
      // Left to Right: if we scrolled past 0, reset forward by one row width
      if (nextX >= 0) {
        nextX -= rowWidth;
      }
    }

    x.set(nextX);
  });

  return (
    <div
      ref={containerRef}
      className="w-full cursor-grab active:cursor-grabbing py-2 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        isDraggingRef.current = false;
      }}
    >
      <motion.div
        ref={trackRef}
        className="flex gap-6 md:gap-8 w-max"
        style={{ x }}
        drag="x"
        onDragStart={() => {
          isDraggingRef.current = true;
        }}
        onDrag={(event, info) => {
          // Keep the drag translation wrapped inside the bounds so we never hit an empty screen edge
          let currentX = x.get();
          if (currentX <= -rowWidth) {
            x.set(currentX + rowWidth);
          } else if (currentX >= 0) {
            x.set(currentX - rowWidth);
          }
        }}
        onDragEnd={() => {
          isDraggingRef.current = false;
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="w-[320px] md:w-[460px] shrink-0 rounded-[20px] border border-emerald-950/40 bg-[#0A3A19] p-6 md:p-8 flex flex-col justify-between gap-6 hover:border-[#0BC13E]/30 transition-all duration-300 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-lg md:text-xl font-bold tracking-tight">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed italic">
                {item.quote}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-emerald-900/40">
                <Image
                  src={item.image}
                  alt={item.author}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm leading-tight">
                  {item.author}
                </span>
                <span className="text-gray-500 text-xs">
                  {item.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  return (
    <section className="w-full bg-[#041609] py-20 md:py-32 flex flex-col items-center gap-12 md:gap-16 border-t border-gray-900/40 overflow-hidden">
      
      {/* HEADING SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1400px] px-6 md:px-10 lg:px-16 text-center flex flex-col gap-4"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          What our partners say
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Trusted by leading operations and engineering teams across global marine and energy sectors.
        </p>
      </motion.div>

      {/* CAROUSEL TRACK CONTAINER (Full screen width edge-to-edge!) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="flex flex-col gap-6 md:gap-8 w-full"
      >
        {/* Row 1: Left to Right (Speed positive) */}
        <TestimonialRow testimonials={topTestimonials} speed={0.6} />

        {/* Row 2: Right to Left (Speed negative) */}
        <TestimonialRow testimonials={bottomTestimonials} speed={-0.6} />
      </motion.div>

    </section>
  );
}
