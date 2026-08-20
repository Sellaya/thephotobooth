"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function toLocalIso(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseIso(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDisplay(value: string) {
  return parseIso(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

export function DatePicker({
  value,
  onChange,
  min,
  placeholder = "Select a date",
  invalid,
}: {
  value: string;
  onChange: (value: string) => void;
  min?: string;
  placeholder?: string;
  invalid?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(() =>
    value ? startOfMonth(parseIso(value)) : startOfMonth(new Date())
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (value) setView(startOfMonth(parseIso(value)));
  }, [value]);

  const minDate = min ?? toLocalIso();
  const today = toLocalIso();
  const days = useMemo(() => buildCalendar(view), [view]);
  const prevMonthEnd = new Date(view.getFullYear(), view.getMonth(), 0);
  const canGoPrev = toLocalIso(prevMonthEnd) >= minDate;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border bg-paper-50 px-4 py-3 text-left text-sm outline-none transition-all duration-200 hover:border-ink-300 focus:border-gold-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(178,154,106,0.16)]",
          invalid
            ? "border-red-400 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.18)]"
            : "border-ink-300/40",
          open && "border-gold-500 bg-white shadow-[0_0_0_4px_rgba(178,154,106,0.16)]"
        )}
      >
        <span className={value ? "text-ink-900" : "text-ink-500"}>
          {value ? formatDisplay(value) : placeholder}
        </span>
        <CalendarDays
          className={cn(
            "h-4 w-4 shrink-0 text-ink-500 transition-colors",
            open && "text-gold-600"
          )}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-label="Choose event date"
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 z-30 mt-2 w-full rounded-2xl border border-ink-300/25 bg-white p-4 shadow-soft-lg sm:left-auto sm:right-0 sm:w-[19.5rem]"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="font-display text-base font-medium text-ink-950">
                {MONTHS[view.getMonth()]} {view.getFullYear()}
              </p>
              <div className="flex gap-1">
                <NavButton
                  label="Previous month"
                  disabled={!canGoPrev}
                  onClick={() => setView((current) => addMonths(current, -1))}
                >
                  <ChevronLeft className="h-4 w-4" />
                </NavButton>
                <NavButton
                  label="Next month"
                  onClick={() => setView((current) => addMonths(current, 1))}
                >
                  <ChevronRight className="h-4 w-4" />
                </NavButton>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-y-1 text-center">
              {WEEKDAYS.map((day, index) => (
                <span
                  key={`${day}-${index}`}
                  className="pb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-gold-600"
                >
                  {day}
                </span>
              ))}
              {days.map((cell, index) => {
                if (!cell) {
                  return <span key={`empty-${index}`} />;
                }
                const iso = toLocalIso(cell);
                const disabled = iso < minDate;
                const selected = iso === value;
                const isToday = iso === today;
                return (
                  <button
                    key={iso}
                    type="button"
                    disabled={disabled}
                    onClick={() => {
                      onChange(iso);
                      setOpen(false);
                    }}
                    className={cn(
                      "mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors",
                      disabled && "cursor-not-allowed text-ink-300",
                      !disabled && !selected && "text-ink-800 hover:bg-paper-100",
                      selected && "bg-gold-500 font-medium text-ink-950",
                      isToday && !selected && "ring-1 ring-gold-500/70"
                    )}
                  >
                    {cell.getDate()}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-ink-300/20 pt-3">
              <button
                type="button"
                onClick={() => {
                  onChange("");
                  setOpen(false);
                }}
                className="text-xs font-medium text-ink-500 transition-colors hover:text-ink-950"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => {
                  onChange(today);
                  setView(startOfMonth(new Date()));
                  setOpen(false);
                }}
                className="text-xs font-medium text-gold-600 transition-colors hover:text-gold-500"
              >
                Today
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function NavButton({
  children,
  onClick,
  disabled,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-paper-100 hover:text-ink-950 disabled:pointer-events-none disabled:opacity-30"
    >
      {children}
    </button>
  );
}

function buildCalendar(view: Date) {
  const first = startOfMonth(view);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [];

  for (let i = 0; i < startWeekday; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(view.getFullYear(), view.getMonth(), day));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
