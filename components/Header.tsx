"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, WhatsappLogo, List, X } from "@phosphor-icons/react";
import { SITE } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué nosotros", href: "#confianza" },
  { label: "Zona de cobertura", href: "#cobertura" },
  { label: "Proceso", href: "#proceso" },
  { label: "Opiniones", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  // Close menu on escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  function handleNavClick() {
    setMobileOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gm-black/95 backdrop-blur-md border-b border-gm-border shadow-lg"
          : "bg-gm-black/80 backdrop-blur-sm"
      }`}
      style={{ height: "72px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          aria-label="G&M Reparaciones — Inicio"
          className="flex items-center gap-3 shrink-0"
        >
          <Image
            src="/assets/logo.jpg"
            alt="Logo G&M Reparaciones — servicio técnico de electrodomésticos Valladolid"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <span className="font-heading font-800 text-white text-lg hidden sm:block">
            G&amp;M <span className="text-gm-orange">Reparaciones</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Navegación principal"
          className="hidden xl:flex items-center gap-1"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm text-gm-muted hover:text-white font-500 transition-colors rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a
            href={`tel:${SITE.phoneDial}`}
            className="flex items-center gap-2 px-4 py-2 bg-gm-orange text-gm-black font-700 text-sm rounded-lg hover:bg-gm-red transition-colors cursor-pointer"
            aria-label={`Llamar a G&M Reparaciones: ${SITE.phone}`}
          >
            <Phone size={16} weight="fill" />
            <span>{SITE.phone}</span>
          </a>
          <a
            href={`https://wa.me/${SITE.whatsappDial}?text=${SITE.whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gm-cyan text-gm-black font-700 text-sm rounded-lg hover:bg-gm-cyan-dark transition-colors cursor-pointer"
            aria-label="Contactar por WhatsApp"
          >
            <WhatsappLogo size={16} weight="fill" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile hamburger + phone icon */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${SITE.phoneDial}`}
            className="flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 bg-gm-orange text-gm-black rounded-lg hover:bg-gm-red transition-colors cursor-pointer"
            aria-label={`Llamar: ${SITE.phone}`}
          >
            <Phone size={18} weight="fill" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 text-white border border-gm-border rounded-lg hover:border-gm-muted transition-colors cursor-pointer"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden absolute top-full left-0 right-0 bg-gm-black/97 backdrop-blur-md border-b border-gm-border shadow-xl"
          role="navigation"
          aria-label="Menú móvil"
        >
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="block px-3 py-3 text-base text-gm-text hover:text-gm-orange font-500 transition-colors border-b border-gm-border/50 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href={`tel:${SITE.phoneDial}`}
                className="flex items-center justify-center gap-2 py-3 bg-gm-orange text-gm-black font-700 text-sm rounded-lg"
                aria-label={`Llamar: ${SITE.phone}`}
              >
                <Phone size={18} weight="fill" />
                {SITE.phone}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsappDial}?text=${SITE.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-gm-cyan text-gm-black font-700 text-sm rounded-lg"
              >
                <WhatsappLogo size={18} weight="fill" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
