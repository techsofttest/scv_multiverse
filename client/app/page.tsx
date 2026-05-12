import Hero from "@/components/Hero";
import ValueMetrics from "@/components/ValueMetrics";
import AboutTeaser from "@/components/AboutTeaser";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import PreFooterCTA from "@/components/PreFooterCTA";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// DYNAMIC METADATA FETCHING
export async function generateMetadata({ params }: Props): Promise< Metadata > {
  const slug = (await params).slug;
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

  try {
    const response = await fetch(`${baseUrl}/api/pages`);
    const data = await response.json();
    const seo = data.seo;

    if (!seo) return { title: "Home Not Found" };

      return {
      title: seo.meta_title || "Home | Bayroof Constructions",
      description: seo.meta_desc || "Explore our comprehensive turnkey roofing solutions in Kerala.",
      keywords: seo.meta_key || "roofing, construction, Kerala",
      openGraph: {
        title: seo.meta_title,
        description: seo.meta_desc,
        type: "website",
      },
    };
  } catch (error) {
    return { title: "Bayroof Constructions" };
  }
}
export default function Home() {

  return (
    <div className="w-full flex flex-col">
      <Hero />
      <ValueMetrics />
      <Services />
      <AboutTeaser />
      <Gallery />
      <PreFooterCTA />
    </div>
  );
}