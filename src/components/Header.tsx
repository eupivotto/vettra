"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Produtos", href: "/produtos" },
    { label: "Serviços", href: "/servicos" },
    { label: "Orçamento", href: "/orcamento" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <header className="bg-[#045060] text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo-vettra.png"
            alt="Logo da Vettra Soluções Construtivas"
            width={150}
            height={50}
            className="h-auto"
            priority
          />
        </Link>

        {/* Menu Desktop com Efeito Tubelight */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative px-3 py-2 text-lg font-medium hover:text-accent transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-transparent to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
          {/* Botão Desktop como <button> normal */}
          <button className="ml-4 rounded-full bg-[#bdd8e3] px-6 py-2.5 text-lg font-bold text-[#044d5e] shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105">
            Solicite seu Orçamento
          </button>
        </nav>

        {/* Menu Mobile (Hamburger) */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            {/* O botão de hamburger pode continuar sendo do Shadcn */}
            <button className="md:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-primary text-white">
            <nav className="flex flex-col space-y-4 mt-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              {/* Botão Mobile como <button> normal */}
              <button className="mt-4 rounded-full bg-[#bdd8e3] px-6 py-3 text-lg font-bold text-[#044d5e] shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105">
                Solicite seu Orçamento
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
