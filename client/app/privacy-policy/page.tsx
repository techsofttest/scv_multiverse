import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
  
  try {
    const response = await fetch(`${baseUrl}/api/privacy`);
   const data = await response.json();
    const seo = data.seo;
    
    return {
      title: seo.meta_title || "Privacy Policy | Bayroof Constructions",
      description: seo.meta_desc || "Learn about how Bayroof Constructions collects, uses, and protects your personal information.",
      keywords: seo.meta_key || "privacy policy, data protection, personal information, Bayroof Constructions",
      openGraph: {
        title: seo.meta_title,
        description: seo.meta_desc,
        type: "website",
      },
    };
  } catch (error) {
    return {
      title: "Privacy Policy | Bayroof Constructions",
      description: "Learn about how Bayroof Constructions collects, uses, and protects your personal information.",
    };
  }
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}