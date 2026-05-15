import Hero from "@/components/Hero";
import BrandsStrip from "@/components/BrandsStrip";
import LocacaoSection from "@/components/LocacaoSection";
import ProductsCatalog from "@/components/ProductsCatalog";
import PartsSection from "@/components/PartsSection";
import AreaMap from "@/components/AreaMap";
import AboutSection from "@/components/AboutSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandsStrip />
      <LocacaoSection />
      <ProductsCatalog />
      <PartsSection />
      <AreaMap />
      <AboutSection />
    </>
  );
}
