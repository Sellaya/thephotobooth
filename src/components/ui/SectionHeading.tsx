import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-3 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.22em]",
            tone === "dark" ? "text-gold-400" : "text-gold-600"
          )}
        >
          <span
            aria-hidden
            className={cn(
              "h-px w-6",
              tone === "dark" ? "bg-gold-400/70" : "bg-gold-500"
            )}
          />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-display mt-4 text-[1.75rem] font-medium tracking-tight sm:text-[2.5rem] sm:leading-[1.15]",
          tone === "dark" ? "text-paper-50" : "text-ink-950"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-ink-300" : "text-ink-700"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
