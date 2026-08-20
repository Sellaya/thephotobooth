import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "outline" | "dark" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-gold-500 text-ink-950 border-gold-500",
  outline: "bg-transparent text-ink-950 border-ink-950/20",
  dark: "bg-ink-950 text-paper-50 border-ink-950",
  ghost: "bg-transparent text-paper-50 border-white/20",
};

const baseClasses =
  "group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full border px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-paper-50 hover:bg-paper-50 hover:text-ink-950 hover:shadow-btn active:translate-y-0 active:scale-[0.98] sm:px-6 sm:py-3";

function ButtonInner({
  children,
  withArrow,
}: {
  children: React.ReactNode;
  withArrow?: boolean;
}) {
  return (
    <>
      <span className="btn-shine group-hover/btn:translate-x-full group-focus-visible/btn:translate-x-full" aria-hidden />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {withArrow ? (
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        ) : null}
      </span>
    </>
  );
}

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  withArrow?: boolean;
} & ComponentPropsWithoutRef<"a">;

export function LinkButton({
  variant = "primary",
  className,
  children,
  href,
  withArrow = true,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href ?? "#"}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      <ButtonInner withArrow={withArrow}>{children}</ButtonInner>
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  withArrow = false,
  ...props
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  withArrow?: boolean;
} & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(
        baseClasses,
        "cursor-pointer disabled:pointer-events-none disabled:opacity-60 disabled:hover:translate-y-0",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <ButtonInner withArrow={withArrow}>{children}</ButtonInner>
    </button>
  );
}
