"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper-50 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Good to Know" title="Frequently asked questions" />

        <div className="mx-auto mt-14 max-w-2xl divide-y divide-ink-300/30 border-y border-ink-300/30">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.03}>
                <div>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left transition-colors hover:text-gold-600"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={cn(
                        "font-medium transition-colors",
                        isOpen ? "text-ink-950" : "text-ink-800"
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "rotate-45 border-gold-500 bg-gold-500 text-ink-950"
                          : "border-ink-300/60 text-ink-700 group-hover:border-gold-500 group-hover:text-gold-600"
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-sm leading-relaxed text-ink-700">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
