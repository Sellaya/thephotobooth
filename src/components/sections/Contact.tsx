"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIcon, WhatsAppIcon, iconMap } from "@/components/icons";
import { contactItems, siteConfig } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact us"
          description="Have a question before booking? Reach out any way that's easiest for you."
          align="left"
        />

        <div className="mt-10 flex flex-col">
          {contactItems.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex items-start gap-4 border-t border-ink-300/25 py-5 last:border-b"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink-300/50 text-ink-950 transition-all duration-300 group-hover:border-gold-500 group-hover:bg-gold-500">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="flex flex-wrap items-center gap-2 font-medium text-ink-950">
                    {item.title}
                    {item.soon ? (
                      <span className="rounded-full bg-sage-500/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-sage-600">
                        Coming Soon
                      </span>
                    ) : null}
                  </h4>
                  <p className="mt-0.5 text-sm text-ink-700">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="link-underline transition-colors hover:text-ink-950"
                      >
                        {item.description}
                      </a>
                    ) : (
                      item.description
                    )}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <Reveal className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <strong className="block font-medium">Follow the fun</strong>
            <p className="mt-1 text-sm text-ink-700">
              {siteConfig.instagramHandle} on Instagram
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="icon-btn icon-btn-light"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              className="icon-btn icon-btn-light"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
