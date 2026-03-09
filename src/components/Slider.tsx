"use client";

import * as React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";  // Para autoplay (opcional)

export function Slider() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })  // Autoplay a cada 5s, para ao interagir
  );

  const slides = [
    { 
      src: "/images/banner-01.jpg", 
      alt: "Slide 1 - Vettra Soluções Construtivas",
      title: "Vettra Soluções Construtivas",
      subtitle: "Velocidade e sofisticação para sua obra."
    },
    { 
      src: "/images/banner-02.jpg", 
      alt: "Slide 2 - Nossos Projetos",
      title: "Nossos Projetos",
      subtitle: "Excelência em cada detalhe."
    },
    { 
      src: "/images/bannner-03.jpg", 
      alt: "Slide 3 - Acabamentos de Excelência",
      title: "Acabamentos de Alto Padrão",
      subtitle: "Qualidade que transforma ambientes."
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}  // Ativa autoplay (remova se não quiser)
      className="w-full max-w-full overflow-hidden"
      opts={{ align: "start", loop: true }}  // Loop infinito
    >
      <CarouselContent className="-ml-1">
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-full">
            {/* Mobile: Altura fixa (400px). Desktop: Altura automática proporcional (aspect-ratio) para não cortar */}
            <div className="relative w-full h-[400px] md:h-auto md:aspect-[1920/700]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}  // Prioriza o primeiro slide
                className="object-cover"  // Preenche sem distorção
              />
              {/* Overlay de Texto - Apenas Mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end pb-16 px-6 text-balance md:hidden">
                <h2 className="text-white text-3xl font-bold mb-3 drop-shadow-md transform transition-all duration-700 w-full">
                  {slide.title}
                </h2>
                <p className="text-white/90 text-lg font-medium max-w-2xl drop-shadow-sm">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
