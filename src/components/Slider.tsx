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
    { src: "/images/banner-01.jpg", alt: "Slide 1 - Vettra Soluções Construtivas" },
    { src: "/images/banner-02.jpg", alt: "Slide 2 - Nossos Projetos" },
    { src: "/images/bannner-03.jpg", alt: "Slide 3 - Acabamentos de Excelência" },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}  // Ativa autoplay (remova se não quiser)
      className="w-full max-w-full"
      opts={{ align: "start", loop: true }}  // Loop infinito
    >
      <CarouselContent className="-ml-1">
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-full">
            <div className="relative w-full h-[700px] md:h-[600px] lg:h-[700px]">  {/* Altura responsiva */}
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}  // Prioriza o primeiro slide
                className="object-cover"  // Preenche sem distorção
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
