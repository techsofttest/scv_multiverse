import { Metadata } from "next";
import ProductsClient from "./ProductList";

interface ProductResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl =process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch SEO data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSEO();

  return {
    title: data.seo.meta_title,
    description: data.seo.meta_desc,
    keywords: data.seo.meta_key,
  };
}

export default function Page() {
  return <ProductsClient />;
}