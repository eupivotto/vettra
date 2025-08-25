"use client";
import Image from "next/image";

const produtos = [
  {
    nome: "Capri",
    categoria: "Régua",
    codigo: "24896194",
    medida: "208,5x1230mm",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=480&q=80" // Exemplo piso claro
  },
  {
    nome: "Napoli",
    categoria: "Régua",
    codigo: "24896693",
    medida: "208,5x1230mm",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=480&q=80" // Exemplo piso cinza
  },
  {
    nome: "Alba",
    categoria: "Régua",
    codigo: "24896656",
    medida: "208,5x1230mm",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=480&q=80" // Exemplo piso escuro
  },
  {
    nome: "Bergamasco",
    categoria: "Régua",
    codigo: "24896622",
    medida: "208,5x1230mm",
    img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=480&q=80" // Exemplo piso bege
  }
];

export default function ProductsSection() {
  return (
    <section id="produtos" className="w-full bg-[#f9fafb] py-12">
      <h2 className="text-3xl font-bold text-primary text-center mb-10">Produtos</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-8 justify-center min-w-[700px]">
          {produtos.map((p) => (
            <div key={p.nome} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded shadow-lg bg-white overflow-hidden mb-3 border border-gray-200">
                <Image
                  src={p.img}
                  alt={p.nome}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center text-primary font-semibold">{p.nome}</div>
              <div className="text-zinc-600">{p.categoria}</div>
              <div className="text-zinc-600">{p.codigo}</div>
              <div className="text-zinc-600">{p.medida}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
