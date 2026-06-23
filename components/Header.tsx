"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "首页" },
  { href: "/works", label: "作品" },
  { href: "/services", label: "服务" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-md border-b border-ink-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="天津砚宸科技 INKING ARCHITECTURAL.CG"
            width={140}
            height={48}
            priority
            className="logo-invert h-9 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-[0.2em] uppercase transition-colors ${
                  active ? "text-accent" : "text-ink-200 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase border border-ink-600 hover:border-accent hover:text-accent px-5 py-2.5 transition-colors"
        >
          洽谈合作
        </Link>

        <button
          aria-label="菜单"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-px w-6 bg-ink-100 transition-transform ${
              menuOpen ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink-100 transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-ink-800 bg-ink-950/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base tracking-widest uppercase text-ink-200 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center text-xs tracking-[0.25em] uppercase border border-ink-600 px-5 py-3"
            >
              洽谈合作
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
