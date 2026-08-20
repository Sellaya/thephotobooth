"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const progress = Math.min(1, scrollY / 88);
  const compact = progress > 0.12 && !open;
  const glass = !open && progress > 0;

  return (
    <>
      <header className="sticky top-0 z-50">
        <div
          className={cn(
            "border-b transition-[height,border-color] duration-300 ease-out",
            open && "border-transparent bg-ink-950",
            !open && !glass && "border-transparent bg-transparent",
            glass && "border-ink-950/8"
          )}
          style={
            glass
              ? {
                  backgroundColor: `rgba(251, 249, 244, ${0.42 + progress * 0.5})`,
                  backdropFilter: `blur(${10 + progress * 14}px) saturate(1.35)`,
                  WebkitBackdropFilter: `blur(${10 + progress * 14}px) saturate(1.35)`,
                  boxShadow: `0 1px 0 rgba(20, 17, 13, ${0.03 + progress * 0.05}), 0 12px 40px -24px rgba(20, 17, 13, ${progress * 0.22})`,
                }
              : undefined
          }
        >
          <Container
            className={cn(
              "flex items-center justify-between transition-[height] duration-300 ease-out",
              compact ? "h-14 sm:h-16" : "h-16 sm:h-[4.25rem]"
            )}
          >
            <Link
              href="#home"
              onClick={() => setOpen(false)}
              className="relative z-10 flex items-center"
            >
              <Image
                src={open ? "/images/logo-footer.png" : "/images/logo.png"}
                alt={siteConfig.name}
                width={140}
                height={54}
                className={cn(
                  "w-auto transition-all duration-300 hover:opacity-75",
                  compact ? "h-8 sm:h-9" : "h-9 sm:h-10"
                )}
                priority
              />
            </Link>

            <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
              <ul
                className={cn(
                  "flex items-center gap-0.5 p-1 transition-all duration-300",
                  compact
                    ? "rounded-none border-transparent bg-transparent"
                    : "rounded-full border border-ink-300/25 bg-white/50 backdrop-blur-sm"
                )}
              >
                {navLinks.map((link) => {
                  const active = activeHref === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-tight transition-all duration-300",
                          active
                            ? "bg-ink-950 text-paper-50 shadow-soft"
                            : "text-ink-700 hover:bg-ink-950/5 hover:text-ink-950"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="relative z-10 flex items-center gap-2 sm:gap-3">
              <a
                href={siteConfig.phoneHref}
                className="link-underline hidden text-sm font-medium text-ink-700 xl:inline"
              >
                {siteConfig.phone}
              </a>
              <div className={cn("hidden items-center gap-2 sm:flex", open && "sm:hidden")}>
                <Link
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                  className="icon-btn icon-btn-light"
                >
                  <InstagramIcon />
                </Link>
                <Link
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener"
                  aria-label="WhatsApp"
                  className="icon-btn icon-btn-light"
                >
                  <WhatsAppIcon />
                </Link>
              </div>
              <LinkButton
                href="#booking"
                onClick={() => setOpen(false)}
                className={cn("hidden sm:inline-flex", open && "sm:hidden")}
              >
                Book Now
              </LinkButton>
              <button
                className={cn(
                  "icon-btn h-10 w-10 lg:hidden",
                  open ? "icon-btn-dark border-white/20" : "icon-btn-light"
                )}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? (
                  <X className="relative z-10 h-5 w-5" />
                ) : (
                  <Menu className="relative z-10 h-5 w-5" />
                )}
              </button>
            </div>
          </Container>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ink-950 lg:hidden"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-gold-500/20 blur-[100px]"
            />

            <div className="h-16 shrink-0 sm:h-[4.25rem]" />

            <Container className="relative flex min-h-0 flex-1 flex-col pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4">
              <nav className="flex-1 overflow-y-auto">
                <ul className="flex flex-col">
                  {navLinks.map((link, i) => {
                    const active = activeHref === link.href;
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{
                          delay: 0.06 + i * 0.05,
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between border-b border-white/10 py-4"
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="font-display text-[11px] tracking-[0.18em] text-gold-400">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={cn(
                                "font-display text-3xl font-medium tracking-tight transition-colors duration-300 sm:text-4xl",
                                active
                                  ? "text-gold-400"
                                  : "text-paper-50 group-hover:text-gold-400"
                              )}
                            >
                              {link.label}
                            </span>
                          </span>
                          <ArrowUpRight
                            className={cn(
                              "h-5 w-5 shrink-0 transition-all duration-300",
                              active
                                ? "text-gold-400"
                                : "text-ink-300 opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-400 group-hover:opacity-100"
                            )}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 shrink-0"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold-400">
                  Get in touch
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-3 flex items-center gap-2 text-lg text-paper-50 transition-colors hover:text-gold-400"
                >
                  <Phone className="h-4 w-4 text-gold-400" />
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.emailHref}
                  className="mt-2 flex items-center gap-2 text-sm text-paper-50 transition-colors hover:text-gold-400"
                >
                  <Mail className="h-4 w-4 text-gold-400" />
                  {siteConfig.email}
                </a>
                <p className="mt-1 text-sm text-ink-300">
                  {siteConfig.instagramHandle} · Pakistan &amp; the UAE
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <Link
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener"
                    aria-label="Instagram"
                    className="icon-btn icon-btn-dark"
                  >
                    <InstagramIcon />
                  </Link>
                  <Link
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener"
                    aria-label="WhatsApp"
                    className="icon-btn icon-btn-dark"
                  >
                    <WhatsAppIcon />
                  </Link>
                </div>

                <LinkButton
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="mt-6 w-full"
                >
                  Book Now
                </LinkButton>
              </motion.div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
