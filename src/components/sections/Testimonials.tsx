"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, revealItemVariants } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by hosts & guests alike"
          description="Real reviews from Google."
        />

        <RevealGroup className="mt-16 grid gap-10 sm:grid-cols-2 sm:gap-12">
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.name}
              variants={revealItemVariants}
              className="flex flex-col border-t border-ink-300/30 pt-7"
            >
              <div className="flex gap-0.5 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-medium text-ink-950">
                {testimonial.name}
                <span className="ml-2 font-normal text-ink-500">
                  · {testimonial.source}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
