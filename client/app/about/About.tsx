"use client";

import Image from "next/image";
import { useGlobalData } from "@/context/GlobalDataContext";
import { useState, useEffect } from "react";
import PreFooterCTA from "@/components/PreFooterCTA";
interface ContentData {
    cms_title: string;
    content: string;
    image: string;
}
interface BannerData {
    title: string;
    content: string;
    image: string;
}
export default function AboutPage() {
    const { contacts } = useGlobalData();
    const [abouts, setAbout] = useState<ContentData | null>(null);
    const [why, setWhy] = useState<ContentData | null>(null);
    const [banner, setBanner] = useState<BannerData | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/about`)
            .then(res => res.json())
            .then(data => {
                // CHANGE: Use data.abouts directly as it is sent as a single object from Laravel
                if (data.abouts) {
                    setAbout(data.abouts);
                }
                if (data.why) {
                    setWhy(data.why);
                }
                if (data.banner) {
                    setBanner(data.banner);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch about teaser:", err);
                setLoading(false);
            });
    }, []);
   const parseWhyContent = (html: string) => {
  if (!html) return [];

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const items: { title: string; description: string }[] = [];

  const listItems = doc.querySelectorAll("li");

  listItems.forEach((li) => {
    let next = li.parentElement?.nextElementSibling;

    // find next <p>
    while (next && next.tagName !== "P") {
      next = next.nextElementSibling;
    }

    items.push({
      title: li.textContent?.trim() || "",
      description: next?.textContent?.trim() || "",
    });
  });

  return items;
};

    if (loading|| !abouts|| !why|| !banner)return null;
    return (
        <div className="w-full bg-white">

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white">
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${banner?.image}`}
                    alt="About Bayroof"
                    fill
                    priority
                    className="object-cover opacity-40"
                />
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                       {banner?.title}
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        {banner?.content}
                    </p>
                </div>
            </section>

            {/* COMPANY INTRO */}
            <section className="max-w-[1200px] mx-auto px-6 lg:px-20 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT TEXT */}
                    <div>
                        <h2 className="text-3xl font-bold text-deep-navy mb-6">
                            {abouts.cms_title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: abouts.content }}></p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative w-full h-[400px]">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${abouts.image}`}
                            alt="Our Company"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                </div>
            </section>

            {/* VALUES / FEATURES */}
       <section className="bg-gray-50 py-20">
  <div className="max-w-[1200px] mx-auto px-6 lg:px-20">

    <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">
      Why Choose Us
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      {parseWhyContent(why?.content || "").map((item, i) => (
        <div key={i} className="p-6 bg-white shadow-sm">
          <h3 className="font-semibold text-lg text-deep-navy mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm">
            {item.description}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

            {/* CONTACT CTA */}
            <PreFooterCTA />

        </div>
    );
}
