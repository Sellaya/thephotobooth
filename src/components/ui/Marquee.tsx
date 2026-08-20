import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div className="animate-marquee flex shrink-0 items-center gap-14 pr-14 group-hover:[animation-play-state:paused] sm:gap-16 sm:pr-16">
        {children}
      </div>
      <div
        className="animate-marquee flex shrink-0 items-center gap-14 pr-14 group-hover:[animation-play-state:paused] sm:gap-16 sm:pr-16"
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
