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
      <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
        {children}
      </div>
      <div
        className="animate-marquee flex shrink-0 items-center gap-10 pr-10 group-hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
