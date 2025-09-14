"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const categorias = ["Pisos Vinílicos", "Painéis Ripados", "Forros PVC Vinílicos", "Forro PVC Branco", "Forro PVC Pigmentado", "Tubos PVC", "Drywall"];

interface Produto {
  id: number;
  nome: string;
  categoria: string;
  codigo: string;
  medida: string;
  img: string;
}

export default function ProductsSection() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>(categorias[0]);

  useEffect(() => {
    fetch("/api/produtos")
      .then((res) => res.json())
      .then(setProdutos);
  }, []);

  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === categoriaSelecionada
  );

  const whatsappNumber = "5562996130608";
  
  function gerarLinkWhatsApp(produto: Produto) {
    const mensagem = `Olá, tenho interesse no produto: ${produto.nome} (Código: ${produto.codigo}, Medida: ${produto.medida}). Poderia me enviar mais informações?`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
  }

  return (
    <section id="produtos" className="w-full bg-[#f9fafb] py-12">
      <h2 className="text-3xl font-bold text-primary text-center mb-10">
        Nossos Produtos
      </h2>

      <div className="flex justify-center mb-8 gap-8">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaSelecionada(categoria)}
            className={`pb-2 font-semibold border-b-4 transition-colors duration-300 ${
              categoriaSelecionada === categoria
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-primary"
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-8 justify-center min-w-[700px]">
          {produtosFiltrados.map((p) => (
            <div key={p.id} className="flex flex-col items-center max-w-xs">
              <div className="w-48 h-48 rounded-lg shadow-md overflow-hidden mb-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                <Image
                  src={p.img}
                  alt={p.nome}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full rounded-lg"
                  draggable={false}
                />
              </div>
              <div className="text-center text-primary font-semibold">{p.nome}</div>
              <div className="text-zinc-600">{p.categoria}</div>
              <div className="text-zinc-600">{p.codigo}</div>
              <div className="text-zinc-600 mb-4">{p.medida}</div>
              <Button asChild variant="default" className="flex items-center gap-2">
                <a href={gerarLinkWhatsApp(p)} target="_blank" rel="noopener noreferrer">
                  Comprar <FaWhatsapp className="w-5 h-5 text-green-600" />
                </a>
              </Button>
            </div>
          ))}
          {produtosFiltrados.length === 0 && (
            <p className="text-center col-span-full text-gray-500">Nenhum produto nesta categoria.</p>
          )}
        </div>
      </div>
    </section>
  );
}
