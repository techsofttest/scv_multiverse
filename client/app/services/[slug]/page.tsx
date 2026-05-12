// app/services/[slug]/page.tsx
import { Metadata } from "next";
import ServiceClient from "./ServiceClient";

type Props = {
  params: Promise<{ slug: string }>;
};

// DYNAMIC METADATA FETCHING
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

  try {
    const response = await fetch(`${baseUrl}/api/services/${slug}`);
    const data = await response.json();
    const service = data.service;

    if (!service) return { title: "Service Not Found" };

    return {
      title: `${service.meta_title || service.title} | Bayroof Constructions`,
      description: service.meta_desc || "Expert roofing solutions in Kerala.",
      keywords: service.meta_key,
      openGraph: {
        title: service.meta_title || service.title,
        description: service.meta_desc,
        images: service.image ? [`${baseUrl}${service.image}`] : [],
        type: "website",
      },
    };
  } catch (error) {
    return { title: "Bayroof Constructions" };
  }
}

export default async function Page({ params }: Props) {
  // Pass the slug to the client component
  const resolvedParams = await params;
  return <ServiceClient />;
}