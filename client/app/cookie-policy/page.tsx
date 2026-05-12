import { Metadata } from "next";
import CookiePolicyClient from "./CookiePolicyClient";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
  
  try {
    const response = await fetch(`${baseUrl}/api/cookie-policy`);
   const data = await response.json();
    const seo = data.seo;
    
    return {
      title: seo.meta_title || "Cookie Policy | Bayroof Constructions",
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
      title: "Cookie Policy | Bayroof Constructions",
      description: "Learn about how Bayroof Constructions uses cookies and tracking technologies on our website.",
    };
  }
}

export default function CookiePolicyPage() {
    return <CookiePolicyClient />;
}