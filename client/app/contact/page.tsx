// app/services/page.tsx
import { Metadata } from "next";
import ContactClient from "./ContactClient";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
  
  try {
    const response = await fetch(`${baseUrl}/api/Contact`);
   const data = await response.json();
    const seo = data.seo;
    
    return {
      title: seo.meta_title || "Contact Us | Bayroof Constructions",
      description: seo.meta_desc || "Get in touch with Bayroof Constructions for all your roofing needs.",
      keywords: seo.meta_key || "roofing, construction, Kerala",
      openGraph: {
        title: seo.meta_title,
        description: seo.meta_desc,
        type: "website",
      },
    };
  } catch (error) {
    return {
      title: "Contact Us | Bayroof Constructions",
      description: "Get in touch with Bayroof Constructions for all your roofing needs.",
    };
  }
}

export default function Page() {
  return <ContactClient/>;
}