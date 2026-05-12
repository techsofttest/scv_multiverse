// app/services/page.tsx
import { Metadata } from "next";
import About from "./About";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
  
  try {
    const response = await fetch(`${baseUrl}/api/about`);
   const data = await response.json();
    const seo = data.seo;
    
    return {
      title: seo.meta_title || "About Us | Bayroof Constructions",
      description: seo.meta_desc || "Explore our comprehensive turnkey roofing solutions in Kerala.",
      keywords: seo.meta_key || "roofing, construction, Kerala",
      openGraph: {
        title: seo.meta_title,
        description: seo.meta_desc,
        type: "website",
      },
    };
  } catch (error) {
    return {
      title: "About Us | Bayroof Constructions",
      description: "Learn more about Bayroof Constructions and our commitment to quality roofing solutions.",
    };
  }
}

export default function Page() {
  return <About/>;
}