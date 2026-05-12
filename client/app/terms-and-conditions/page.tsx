import { Metadata } from "next";
import TermsAndConditionsClient from "./TermsAndConditionsClient";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
  
  try {
    const response = await fetch(`${baseUrl}/api/terms`);
   const data = await response.json();
    const seo = data.seo;
    
    return {
      title: seo.meta_title || "Terms and Conditions | Bayroof Constructions",
      description: seo.meta_desc || "Read our terms and conditions for using Bayroof Constructions services and website.",
      keywords: seo.meta_key || "terms and conditions, service agreement, legal terms, Bayroof Constructions",
      openGraph: {
        title: seo.meta_title,
        description: seo.meta_desc,
        type: "website",
      },
    };
  } catch (error) {
    return {
      title: "Terms and Conditions | Bayroof Constructions",
      description: "Read our terms and conditions for using Bayroof Constructions services and website.",
    };
  }
}

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsClient />;
}