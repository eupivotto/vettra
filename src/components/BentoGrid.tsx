"use client";
import clsx from "clsx";

type Card = {
  title: string;
  description: string;
  accent?: boolean;
};

const cards: Card[] = [
  {
    title: "Velocidade e Sofisticação",
    description: "Entregamos com agilidade, respeitando o tempo da obra e a autoria do arquiteto.",
  },
  {
    title: "Atuação Regional",
    description: "Centro-Oeste e Norte, com sede em Goiânia-GO.",
  },
  {
    title: "Contato Rápido",
    description: "Agende uma visita ao nosso showroom.",
    accent: true,
  },
];

export default function BentoGrid() {
  return (
    <section className="max-w-6xl mx-auto py-8 px-2">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Nossos Diferenciais</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={clsx(
              "relative rounded-2xl p-6 min-h-[160px] flex flex-col justify-between shadow-xl border transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-accent group overflow-hidden",
              card.accent ? "bg-[#045060] text-white" : "bg-white"
            )}
          >
            <h3 className={clsx("font-semibold text-xl mb-2", card.accent && "text-white")}>{card.title}</h3>
            <p className="text-base opacity-80 group-hover:opacity-100 transition">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
