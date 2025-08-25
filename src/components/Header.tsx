"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";  // Para menu mobile
import { useState } from "react";

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
    <header className="bg-[#044d5e] text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
         <Image
            src="/images/logo-vettra.png"  // Caminho para sua logo original (ajuste se necessário)
            alt="Logo da Vettra Soluções Construtivas"
            width={150}  // Largura em pixels (ajuste conforme o tamanho da logo)
            height={50}  // Altura em pixels (mantenha a proporção da logo original)
            priority  // Carrega prioritariamente para performance
            className="h-auto max-w-[150px] md:max-w-[200px]"  // Responsivo com Tailwind
          />
        </Link>
         {/* Menu Desktop com Efeito Tubelight */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative px-3 py-2 text-lg font-medium hover:text-accent transition-colors duration-300 group"
            >
              {item.label}
              {/* Efeito Tubelight: Underline animado com gradient */}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-transparent to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </nav>

        {/* Botão Agendar */}
        <Button variant="outline" className="hidden md:block text-primary bg-white hover:bg-secondary">
          Agendar Visita
        </Button>

        {/* Menu Mobile (Hamburger) */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
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
              <Button variant="outline" className="text-primary bg-white hover:bg-secondary mt-4">
                Agendar Visita
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
