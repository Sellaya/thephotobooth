"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { GoogleIcon } from "@/components/icons";
import { googleReviews, testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

function GoogleStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5"
          style={{ color: "#FABB05" }}
          fill={i < rating ? "#FABB05" : "none"}
        />
      ))}
    </div>
  );
}

function GoogleTag() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/50 bg-white/50 px-2 py-1 text-[11px] font-medium tracking-tight text-ink-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-md">
      <GoogleIcon className="h-3.5 w-3.5" />
      Google
    </span>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function ReviewCard({
  review,
  expanded,
  onToggle,
}: {
  review: (typeof testimonials)[number];
  expanded: boolean;
  onToggle?: () => void;
}) {
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const [needsReadMore, setNeedsReadMore] = useState(false);

  useLayoutEffect(() => {
    const el = quoteRef.current;
    if (!el) return;

    const measure = () => {
      if (expanded) return;

      const clone = el.cloneNode(true) as HTMLElement;
      clone.style.cssText =
        "position:absolute;visibility:hidden;display:block;overflow:visible;height:auto;max-height:none;-webkit-line-clamp:unset;line-clamp:unset;width:" +
        `${el.clientWidth}px`;
      el.parentElement?.appendChild(clone);
      const overflowing = clone.scrollHeight > el.clientHeight + 1;
      clone.remove();
      setNeedsReadMore(overflowing);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [expanded, review.quote]);

  return (
    <article className="relative flex h-[15rem] w-[15rem] shrink-0 flex-col rounded-2xl border border-white/70 bg-white/70 p-4 shadow-soft backdrop-blur-xl sm:h-[16.25rem] sm:w-[17.5rem] sm:p-[1.125rem]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-950/90 text-[10px] font-semibold tracking-wide text-paper-50"
          >
            {initials(review.name)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink-950">
              {review.name}
            </p>
            <div className="mt-1">
              <GoogleStars rating={review.rating} />
            </div>
          </div>
        </div>
        <GoogleTag />
      </div>

      <blockquote
        ref={quoteRef}
        className={cn(
          "mt-3 text-sm leading-relaxed text-ink-700",
          expanded
            ? "min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1"
            : "line-clamp-4"
        )}
      >
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <div className="mt-auto pt-3">
        {needsReadMore ? (
          <button
            type="button"
            onClick={onToggle}
            className="text-sm font-medium text-ink-950 underline decoration-ink-300/70 underline-offset-4 transition-colors hover:text-gold-600 hover:decoration-gold-500"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        ) : null}
      </div>
    </article>
  );
}

export function Testimonials() {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  return (
    <section id="reviews" className="relative overflow-x-clip bg-paper-100 py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.72),transparent_62%)]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Google reviews"
          title="Loved by hosts & guests alike"
        />
      </Container>

      <div
        className={cn(
          "group/marquee relative mt-10 sm:mt-14",
          expandedKey && "[&_.animate-marquee-reviews]:[animation-play-state:paused]"
        )}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-paper-100 to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-paper-100 to-transparent sm:w-16" />

        <div className="overflow-x-auto overflow-y-visible no-scrollbar">
          <div className="animate-marquee-reviews flex w-max group-hover/marquee:[animation-play-state:paused] group-active/marquee:[animation-play-state:paused] motion-reduce:animate-none">
            <div className="flex gap-4 py-6 pr-4 sm:gap-5 sm:pr-5">
              {testimonials.map((review, index) => {
                const key = `${review.name}-${index}`;
                return (
                  <ReviewCard
                    key={key}
                    review={review}
                    expanded={expandedKey === key}
                    onToggle={() =>
                      setExpandedKey((current) => (current === key ? null : key))
                    }
                  />
                );
              })}
            </div>
            <div className="flex gap-4 py-6 pr-4 sm:gap-5 sm:pr-5" aria-hidden inert>
              {testimonials.map((review, index) => (
                <ReviewCard
                  key={`dup-${review.name}-${index}`}
                  review={review}
                  expanded={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Container className="relative">
        <Reveal className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center">
          <LinkButton
            href={googleReviews.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="w-full sm:w-auto"
          >
            See all on Google
          </LinkButton>
          <LinkButton
            href={googleReviews.writeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
            className="w-full sm:w-auto"
          >
            Write a Google review
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
