import { Metadata } from "next";
import PageTemplate from "@/components/PageTemplate";

interface AboutResponse {
  about: {
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

async function getAboutData(): Promise<AboutResponse> {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

  const url = `${baseUrl}/api/about`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error(
      `Fetch error: ${res.status} ${res.statusText} at ${url}`
    );

    throw new Error(
      `Failed to fetch about data: ${res.status} ${res.statusText}`
    );
  }

  return res.json();
}

// SEO METADATA
export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutData();

  return {
    title: data.seo.meta_title,
    description: data.seo.meta_desc,
    keywords: data.seo.meta_key,

    openGraph: {
      title: data.seo.meta_title,
      description: data.seo.meta_desc,
      images: data.about.image
        ? [
          {
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}${data.about.image}`,
            width: 1200,
            height: 630,
            alt: data.about.title,
          },
        ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: data.seo.meta_title,
      description: data.seo.meta_desc,
      images: data.about.image
        ? [
          `${process.env.NEXT_PUBLIC_API_BASE_URL}${data.about.image}`,
        ]
        : [],
    },
  };
}
export default async function AboutPage() {
  const data = await getAboutData();

  return (
    <PageTemplate
      title={data.about.title}
      // Pass the HTML as a JSX block instead of a raw string
      content={
        <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: data.about.content }} />
      }
      imageAlt={data.about.title}
      imageUrl={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.about.image}`}
    />
  );
}