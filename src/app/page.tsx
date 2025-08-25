
import { Slider } from "@/components/Slider";
import BentoGrid from "@/components/BentoGrid";
import AboutSection from "@/components/AboutSection";
import ShowroomSection from "@/components/ShowroomSection";
import ProductsSection from "@/components/ProductsSection";




export default function Home() {
  return (
    <>
    <Slider />
    {/* Bento em largura limitada */}
      <section className="container mx-auto py-8">
        <BentoGrid />
      </section>
      <AboutSection />
      <ShowroomSection />
      <ProductsSection />
    </>
  );
  
}
