"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* -------------------------------------------------- */
/*  Link com “tubelight” (underline animado)          */
/* -------------------------------------------------- */
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}
function FooterLink({ href, children, external = false }: FooterLinkProps) {
  const base =
    "relative px-1 py-0.5 font-medium hover:text-accent transition-colors duration-300 group";
  const underline =
    "block absolute left-0 -bottom-0.5 w-full h-0.5 bg-gradient-to-r from-transparent via-[#bdd8e3] to-[#045060] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded";

  if (external)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
        <span className={underline} />
      </a>
    );

  return (
    <Link href={href} className={base}>
      {children}
      <span className={underline} />
    </Link>
  );
}

/* -------------------------------------------------- */
/*  Footer                                            */
/* -------------------------------------------------- */
export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    tel: "",
    msg: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    // faça integração real aqui…
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ nome: "", email: "", tel: "", msg: "" });
  }

  return (
    <footer className="w-full bg-[#045060] text-white pt-16 pb-8 px-4">
      {/* GRID PRINCIPAL */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
        {/* COLUNA 1 – FORMULÁRIO */}
        <div className="md:col-span-5 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            Solicite seu orçamento Vettra
          </h2>
          <p className="text-[#bdd8e3] text-lg mb-6 font-medium">
            Especialistas em soluções construtivas para cada necessidade.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-full max-w-lg"
          >
            <input
              name="nome"
              placeholder="Seu nome"
              autoComplete="name"
              className="rounded bg-[#174a5a] placeholder-[#bdd8e3]/80 px-4 py-2 outline-none border border-transparent focus:border-accent text-white"
              value={form.nome}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Seu email"
              autoComplete="email"
              className="rounded bg-[#174a5a] placeholder-[#bdd8e3]/80 px-4 py-2 outline-none border border-transparent focus:border-accent text-white"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="tel"
              type="tel"
              placeholder="Seu telefone"
              autoComplete="tel"
              className="rounded bg-[#174a5a] placeholder-[#bdd8e3]/80 px-4 py-2 outline-none border border-transparent focus:border-accent text-white"
              value={form.tel}
              onChange={handleChange}
              required
            />
            <textarea
              name="msg"
              rows={3}
              placeholder="Descreva seu projeto/necessidade"
              className="rounded bg-[#174a5a] placeholder-[#bdd8e3]/80 px-4 py-2 outline-none border border-transparent focus:border-accent text-white"
              value={form.msg}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              disabled={submitted}
              className="bg-[#bdd8e3] text-[#045060] font-semibold py-2 rounded hover:bg-[#a3c6d5] transition"
            >
              {submitted ? "Enviado!" : "Enviar solicitação"}
            </button>
          </form>
        </div>

        {/* COLUNA 2 – LINKS + CONTATO + ENDEREÇO */}
        <div className="md:col-span-4 flex flex-col justify-start">
          {/* grade interna: 3 colunas no desktop, 1 coluna no mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
            <div>
              <h4 className="font-bold mb-2 text-[#bdd8e3]">Empresa</h4>
              <nav className="flex flex-col space-y-1">
                <FooterLink href="/sobre">Sobre</FooterLink>
                <FooterLink href="/showroom">Showroom</FooterLink>
                <FooterLink href="/produtos">Produtos</FooterLink>
                <FooterLink href="/contato">Contato</FooterLink>
              </nav>
            </div>

            <div>
              <h4 className="font-bold mb-2 text-[#bdd8e3]">Atendimento</h4>
              <nav className="flex flex-col space-y-1">
                <FooterLink href="tel:62999999999">Tel: (62) 99999-9999</FooterLink>
                <FooterLink href="mailto:contato@vettra.com.br">
                  contato@vettra.com.br
                </FooterLink>
                <FooterLink href="https://instagram.com" external>
                  Instagram
                </FooterLink>
              </nav>
            </div>

            <div>
              <h4 className="font-bold mb-2 text-[#bdd8e3]">Endereço</h4>
              <address className="not-italic leading-tight">
                Av. Vera Cruz, 123
                <br />
                Goiânia-GO
              </address>
            </div>
          </div>
        </div>

        {/* COLUNA 3 – IMAGEM */}
        <div className="md:col-span-3 flex justify-center md:justify-end">
          <div className="w-100 h-44 relative">
            <Image
              src="/images/logo-vettra.png" // coloque sua imagem em /public
              alt="Atendente Vettra"
              fill
              sizes="(max-width: 768px) 100vw, 11rem"
              className="object-cover rounded-xl "
              priority
            />
          </div>
        </div>
      </div>

      {/* LINHA FINAL */}
      <div className="mt-10 border-t border-[#bdd8e3]/40 pt-4 text-center text-sm text-[#bdd8e3]">
        &copy; {new Date().getFullYear()} Vettra Soluções Construtivas. Todos os
        direitos reservados.
      </div>
    </footer>
  );
}
