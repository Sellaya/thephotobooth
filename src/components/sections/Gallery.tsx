"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, revealItemVariants } from "@/components/ui/Reveal";
import { galleryItems } from "@/lib/data";
import { cn } from "@/lib/utils";

const spanClasses: Record<string, string> = {
  big: "sm:col-span-2 sm:row-span-2",
  wide: "sm:col-span-2",
  small: "",
};

export function Gallery() {
  return (
    <section id="gallery" className="bg-paper-50 py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Recent Events" title="Straight out of the booth" />

        <RevealGroup className="mt-10 grid grid-cols-2 gap-2 sm:mt-16 sm:grid-cols-4 sm:auto-rows-[160px] sm:gap-3">
          {galleryItems.map((item) => (
            <motion.div
              key={item.label}
              variants={revealItemVariants}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-xl sm:aspect-auto",
                spanClasses[item.span]
              )}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <span className="absolute bottom-3 left-4 translate-y-1 whitespace-nowrap text-sm font-medium text-paper-50 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.label}
              </span>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
