import { Metadata } from "next";

import CapabilitiesBento from "@/components/CapabilitiesBento";
import CapabilitiesDetailed from "@/components/CapabilitiesDetailed";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ContactForm from "@/components/ContactForm";
import HeroDiagram from "@/components/HeroDiagram";

interface HomeResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
}

async function getHomeData(): Promise<HomeResponse> {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

  const url = `${baseUrl}/api/pages`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch home data: ${res.status}`
    );
  }

  return res.json();
}

// Dynamic SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomeData();

  return {
    title: data.seo.meta_title,

    description: data.seo.meta_desc,

    keywords: data.seo.meta_key,

    openGraph: {
      title: data.seo.meta_title,

      description: data.seo.meta_desc,
    },

    twitter: {
      card: "summary_large_image",

      title: data.seo.meta_title,

      description: data.seo.meta_desc,

    },
  };
}

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <HeroDiagram />

      <CapabilitiesBento />

      <CapabilitiesDetailed />

      {/* <TestimonialsCarousel /> */}

      <ContactForm />
    </div>
  );
}