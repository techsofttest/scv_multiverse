import { Metadata } from "next";
import PageTemplate from "@/components/PageTemplate";
import ContactForm from "./ContactForm"; // Import your Client form package

interface ContactResponse {
  contact: {
    title: string;
    content: string;
    image: string | null;
  };
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
}

async function getContactData(): Promise<ContactResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
  const url = `${baseUrl}/api/contact`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    console.error(`Fetch error: ${res.status} ${res.statusText} at ${url}`);
    throw new Error(`Failed to fetch contact data: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactData();
  const baseImgUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

  return {
    title: data.seo.meta_title,
    description: data.seo.meta_desc,
    keywords: data.seo.meta_key,
    openGraph: {
      title: data.seo.meta_title,
      description: data.seo.meta_desc,
      images: data.contact.image ? [{ url: `${baseImgUrl}${data.contact.image}`, width: 1200, height: 630, alt: data.contact.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: data.seo.meta_title,
      description: data.seo.meta_desc,
      images: data.contact.image ? [`${baseImgUrl}${data.contact.image}`] : [],
    },
  };
}

export default async function ContactPage() {
  const data = await getContactData();
  const baseImgUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

  return (
    <PageTemplate
      title={data.contact.title}
      imageAlt={data.contact.title}
      imageUrl={`${baseImgUrl}${data.contact.image}`}
      content={
        <div className="flex flex-col w-full">
          <div 
            className="prose prose-invert text-gray-300" 
            dangerouslySetInnerHTML={{ __html: data.contact.content }} 
          />
          <br />
          <ContactForm />
        </div>
      }
    />
  );
}