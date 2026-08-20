"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CameraIcon, iconMap } from "@/components/icons";
import { heroImages, heroStats } from "@/lib/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-paper-50 pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[140px]"
      />

      <Container className="relative grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="relative z-10 min-w-0"
        >
          <motion.div
            variants={item}
            className="mb-5 inline-flex max-w-full items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-700 sm:mb-7 sm:gap-3 sm:text-[11px] sm:tracking-[0.22em]"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-950">
              <CameraIcon className="h-3 w-3" strokeWidth={2.4} />
            </span>
            <span className="leading-snug">Pakistan &amp; the UAE&apos;s Photo Booth Company</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[2.15rem] font-medium leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.4rem]"
          >
            Strike a pose.
            <br />
            Make a memory.
            <br />
            <span className="text-gold-600">Take it home.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-700 sm:mt-6 sm:text-lg"
          >
            At The Photo Booth Company, we bring good vibes, great memories,
            and a touch of vintage charm to every event, serving all across
            Pakistan &amp; the UAE. From weddings to corporate parties, our
            booths deliver fun, laughter, and instant keepsakes your guests
            will love.
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <LinkButton href="#booking" className="w-full sm:w-auto">
              Check Availability
            </LinkButton>
            <LinkButton href="#products" variant="outline" className="w-full sm:w-auto">
              View Our Photo Booths
            </LinkButton>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 grid grid-cols-3 divide-x divide-ink-300/30 border-t border-ink-300/30 pt-6 sm:mt-12 sm:pt-7"
          >
            {heroStats.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <div key={stat.label} className="min-w-0 px-3 first:pl-0 last:pr-0 sm:px-5">
                  <div className="flex items-baseline gap-0.5 font-display text-xl font-medium leading-none tracking-tight text-ink-950 sm:text-2xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    {stat.showStar ? (
                      <span className="text-[0.85em] text-gold-500" aria-hidden>
                        ★
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-[10px] leading-snug text-ink-700 sm:text-[13px]">
                    <Icon className="h-3 w-3 shrink-0 text-gold-600 sm:h-3.5 sm:w-3.5" />
                    <span>{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[300px] w-full max-w-sm sm:h-[420px] sm:max-w-md lg:h-[480px]"
          aria-hidden="true"
        >
          <PhotoCard
            src={heroImages[0].src}
            alt={heroImages[0].alt}
            caption={heroImages[0].caption}
            className="left-0 top-0 w-[62%]"
            rotate={-6}
            delay={0}
          />
          <PhotoCard
            src={heroImages[1].src}
            alt={heroImages[1].alt}
            caption={heroImages[1].caption}
            className="right-0 top-8 w-[58%]"
            rotate={5}
            delay={0.6}
          />
          <PhotoCard
            src={heroImages[2].src}
            alt={heroImages[2].alt}
            caption={heroImages[2].caption}
            className="bottom-0 left-[18%] w-[58%]"
            rotate={3}
            delay={1.2}
          />
        </motion.div>
      </Container>
    </section>
  );
}

function PhotoCard({
  src,
  alt,
  caption,
  className,
  rotate,
  delay,
}: {
  src: string;
  alt: string;
  caption: string;
  className: string;
  rotate: number;
  delay: number;
}) {
  return (
    <div
      className={`animate-float-slow absolute rounded-xl bg-white p-2.5 pb-7 shadow-soft ${className}`}
      style={
        {
          animationDelay: `${delay}s`,
          "--rot": `${rotate}deg`,
          transform: `rotate(${rotate}deg)`,
        } as React.CSSProperties
      }
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        <Image src={src} alt={alt} fill sizes="240px" className="object-cover" />
      </div>
      <p className="mt-3 text-center font-display text-sm text-ink-700">
        {caption}
      </p>
    </div>
  );
}
