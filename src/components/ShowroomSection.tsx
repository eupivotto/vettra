"use client";
import Image from "next/image";

export default function ShowroomSection() {
  return (
    <section id="showroom" className="w-full bg-white px-0 md:px-0 py-0">
      <div className="flex flex-col md:flex-row w-full min-h-[480px]">
        {/* Bloco texto - esquerda */}
        <div className="flex-1 flex flex-col justify-center items-start bg-[#ECF6FA] px-6 md:px-16 py-12 md:py-20 gap-5">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">Showroom VETTRA</h2>
          <div className="bg-[#045060] text-white font-semibold text-lg py-3 px-4 rounded-lg flex items-center gap-3 shadow-md mb-4">
            <svg width="32" height="32" fill="currentColor"><circle cx="16" cy="16" r="16" fill="#fff3" /><path d="M14 17v5h-2v-7h2L18.7 15.7 17 17z" fill="#fff" /></svg>
            Localizado na movimentada Avenida Vera Cruz - Goiânia, nosso espaço é um ponto de encontro entre design, técnica e inspiração.
          </div>
          <p className="text-lg md:text-xl text-primary mb-2">
            A VETTRA Soluções Construtivas posiciona-se como uma empresa inovadora no setor da construção civil, especializada em construção a seco – uma metodologia que revoluciona a forma tradicional de construir.
          </p>
          <ul className="mb-3 text-primary font-semibold ml-4 list-disc text-base">
            <li>Maior agilidade na execução dos projetos</li>
            <li>Mão de obra especializada e reduzida</li>
            <li>Manutenção simplificada das estruturas</li>
            <li>Fino acabamento com qualidade superior</li>
            <li>Menor interferência nas operações do cliente</li>
          </ul>
          <p className="font-bold text-primary text-lg mb-5">
            A VETTRA proporciona uma experiência de construção mais prática, rápida e menos invasiva, priorizando a performance e comodidade do cliente com soluções que minimizam transtornos e garantem excelência no resultado final.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5562993149017"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-[#2691a8] hover:bg-[#045060] text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-md text-base"
          >
            Agende sua visita técnica ou comercial.
            <span className="inline-block rounded-full bg-white text-[#045060] ml-3 p-2">
              <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M4 10h12M12 6l4 4-4 4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </a>
        </div>
        {/* Imagem - direita */}
        <div className="flex-1 relative min-h-[320px] max-h-[700px] md:max-h-none">
          <Image
            src="/images/image-show.jpg"
            alt="Showroom Vettra"
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
