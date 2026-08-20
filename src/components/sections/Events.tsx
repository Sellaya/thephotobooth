"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, revealItemVariants } from "@/components/ui/Reveal";
import { iconMap } from "@/components/icons";
import { events } from "@/lib/data";

export function Events() {
  return (
    <section id="events" className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading title="Wherever the party is, we show up" />

        <RevealGroup className="mt-10 grid gap-8 sm:mt-16 sm:grid-cols-3 sm:gap-8">
          {events.map((event) => {
            const Icon = iconMap[event.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={event.title}
                variants={revealItemVariants}
                className="group text-center"
              >
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-ink-300/50 text-ink-950 transition-all duration-300 group-hover:border-gold-500 group-hover:bg-gold-500">
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display mx-auto min-h-[3.25rem] max-w-[18ch] text-lg font-medium leading-snug text-ink-950 sm:flex sm:items-center sm:justify-center">
                  {event.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-relaxed text-ink-700">
                  {event.description}
                </p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
