"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const paragraph =
    "A VETTRA nasceu da convergência entre técnica, estética e sofisticação. Mais do que executar, traduzimos projetos em experiências sensoriais, com soluções construtivas de alto padrão que unem velocidade, acabamento impecável e curadoria de materiais.\n\nCada solução da VETTRA é pensada para preservar a linguagem do projeto, respeitar o tempo da obra e valorizar a autoria do arquiteto. Seja uma obra residencial ou corporativa, boutique, clínica, apartamento, loja ou espaço de alto fluxo, a VETTRA entrega velocidade com sofisticação.";

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    // bg ocupa 100 vw naturalmente; p/ garantir, removemos qualquer wrapper estreito
    <section id="sobre" className="w-full bg-[#045060] py-16 px-4">
      {/* w-full flex justify-center garante largura total e centraliza o conteúdo */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Imagem opcional */}
        <div className="shrink-0">
          <Image
            src="/images/regioes.png"
            alt="Showroom Vettra"
            width={300}
            height={377}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Texto animado por scroll */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-white text-lg font-bold leading-7 max-w-3xl px-2"
        >
          {paragraph.split("\n").map((str, idx) => (
            <p key={idx} className="mb-4">
              {str}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
