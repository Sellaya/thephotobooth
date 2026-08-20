"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, revealItemVariants } from "@/components/ui/Reveal";
import { iconMap } from "@/components/icons";
import { features } from "@/lib/data";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section className="bg-paper-50 py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why The Photo Booth Company"
          title="Everything you need for picture-perfect moments"
        />

        <RevealGroup className="mt-10 grid gap-8 sm:mt-16 sm:grid-cols-3 sm:gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                variants={revealItemVariants}
                className="group text-center"
              >
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-ink-300/50 text-ink-950 transition-all duration-300 group-hover:border-gold-500 group-hover:bg-gold-500">
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-lg font-medium text-ink-950">
                  {feature.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[32ch] text-sm leading-relaxed text-ink-700">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
