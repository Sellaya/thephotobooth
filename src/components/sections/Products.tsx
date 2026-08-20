"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { RevealGroup, revealItemVariants } from "@/components/ui/Reveal";
import { iconMap } from "@/components/icons";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Products() {
  return (
    <section id="products" className="bg-ink-950 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Photo Booths"
          title="Three ways to say cheese"
          description="Every booth comes with our signature trim, fun props, and a dedicated on-site attendant to ensure everything runs smoothly. Tell us about your event, and we'll recommend the right booth for you."
          tone="dark"
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2">
          {products.map((product) => {
            const Icon = iconMap[product.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={product.title}
                variants={revealItemVariants}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-xl border bg-ink-900/60 transition-colors duration-300",
                  product.featured
                    ? "border-gold-500/40 hover:border-gold-500"
                    : "border-white/10 hover:border-white/25"
                )}
              >
                {product.badge ? (
                  <span className="absolute right-5 top-5 z-10 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-950">
                    {product.badge}
                  </span>
                ) : null}

                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 text-gold-400 transition-colors duration-300 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-ink-950">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-paper-50">
                    {product.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-ink-300">
                    {product.description}
                  </p>
                  <LinkButton
                    href="#booking"
                    variant={product.featured ? "primary" : "ghost"}
                    className="mt-2 self-start"
                  >
                    Enquire Now
                  </LinkButton>
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>

        <motion.div
          variants={revealItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-white/10 py-8 sm:flex-row"
        >
          <div>
            <strong className="block font-display text-lg font-medium text-paper-50">
              Want something custom?
            </strong>
            <p className="mt-1 text-sm text-ink-300">
              We can set up almost anywhere, inquire and we&apos;ll make it happen.
            </p>
          </div>
          <LinkButton href="#booking">Inquire Now</LinkButton>
        </motion.div>
      </Container>
    </section>
  );
}
