"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Tubelight underline effect (igual ao header)
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative px-1 py-0.5 font-medium hover:text-accent transition-colors duration-300 group"
    >
      {children}
      <span className="block absolute left-0 -bottom-0.5 w-full h-0.5 bg-gradient-to-r from-transparent via-[#bdd8e3] to-[#045060] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded" />
    </Link>
  );
}

export default function Footer() {
  // Apenas simula um submit (adicione integração real conforme desejar)
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", tel: "", msg: "" });
  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ nome: "", email: "", tel: "", msg: "" });
  }

  return (
    <footer className="w-full bg-[#045060] text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:gap-10">
        {/* ESQUERDA: CTA + FORMULÁRIO */}
        <div className="flex-1 mb-12 md:mb-0 md:mr-6 flex flex-col justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            Solicite seu orçamento Vettra
          </h2>
          <span className="text-[#bdd8e3] text-lg mb-6 block font-medium">
            Especialistas em soluções construtivas para cada necessidade.
          </span>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 max-w-lg"
          >
            <input
              name="nome"
              className="rounded bg-[#174a5a] focus:bg-[#174a5a] placeholder-[#bdd8e3]/80 px-4 py-2 outline-none border border-transparent focus:border-accent text-white"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <input
              name="email"
              type="email"
              className="rounded bg-[#174a5a] focus:bg-[#174a5a] placeholder-[#bdd8e3]/80 px-4 py-2 outline-none border border-transparent focus:border-accent text-white"
              placeholder="Seu email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <input
              name="tel"
              type="tel"
              className="rounded bg-[#174a5a] focus:bg-[#174a5a] placeholder-[#bdd8e3]/80 px-4 py-2 outline-none border border-transparent focus:border-accent text-white"
              placeholder="Seu telefone"
              value={form.tel}
              onChange={handleChange}
              required
              autoComplete="tel"
            />
            <textarea
              name="msg"
              rows={3}
              className="rounded bg-[#174a5a] focus:bg-[#174a5a] placeholder-[#bdd8e3]/80 px-4 py-2 outline-none border border-transparent focus:border-accent text-white"
              placeholder="Descreva seu projeto/necessidade"
              value={form.msg}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-[#bdd8e3] text-[#045060] font-semibold py-2 rounded hover:bg-[#a3c6d5] transition"
              disabled={submitted}
            >
              {submitted ? "Enviado!" : "Enviar solicitação"}
            </button>
          </form>
        </div>
        {/* CENTRO: COLUNAS DE NAVEGAÇÃO */}
        <div className="flex-[0.8] mb-12 md:mb-0 flex flex-row flex-wrap gap-12 md:gap-10 justify-center">
          <div>
            <div className="font-bold mb-2 text-[#bdd8e3]">Empresa</div>
            <nav className="flex flex-col space-y-1 text-white">
              <FooterLink href="/sobre">Sobre</FooterLink>
              <FooterLink href="/showroom">Showroom</FooterLink>
              <FooterLink href="/produtos">Produtos</FooterLink>
              <FooterLink href="/contato">Contato</FooterLink>
            </nav>
          </div>
          <div>
            <div className="font-bold mb-2 text-[#bdd8e3]">Atendimento</div>
            <nav className="flex flex-col space-y-1 text-white">
              <FooterLink href="tel:62999999999">
                Tel: (62) 99999-9999
              </FooterLink>
              <FooterLink href="mailto:contato@vettra.com.br">
                contato@vettra.com.br
              </FooterLink>
              <FooterLink href="https://instagram.com" target="_blank">
                Instagram
              </FooterLink>
            </nav>
          </div>
          <div>
            <div className="font-bold mb-2 text-[#bdd8e3]">Endereço</div>
            <div className="text-white leading-tight">
              Av. Vera Cruz, 123
              <br />
              Goiânia-GO
            </div>
          </div>
        </div>
        {/* DIREITA: IMAGEM DO ATENDENTE */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-48 h-48 relative">
            <Image
              src="/atendente.jpg" // Substitua pelo caminho correto da imagem do atendente
              alt="Atendente Vettra"
              fill
              className="rounded-xl object-cover border-4 border-[#bdd8e3] shadow-lg"
              sizes="(max-width: 768px) 100vw, 12rem"
              priority
            />
          </div>
        </div>
      </div>
      {/* RODAPÉ FINAL */}
      <div className="mt-10 border-t border-[#bdd8e3]/40 pt-4 text-sm text-[#bdd8e3] text-center">
        &copy; {new Date().getFullYear()} Vettra Soluções Construtivas. Todos os
        direitos reservados.
      </div>
    </footer>
  );
}
