import Hero from "@/components/Hero";
import ValueMetrics from "@/components/ValueMetrics";
import AboutTeaser from "@/components/AboutTeaser";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import PreFooterCTA from "@/components/PreFooterCTA";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <ValueMetrics />
      <Services />
      <AboutTeaser />
      <Gallery />
      <PreFooterCTA />
    </div>
  );
}