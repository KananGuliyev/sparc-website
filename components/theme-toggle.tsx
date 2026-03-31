"use client";

import { Moon, Sun, CloudMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

const themes = [
  { key: "light", label: "Default", color: "#ffffff", borderColor: "#d4d4d8" },
  { key: "dim", label: "Dim", color: "#15202b", borderColor: "#38444d" },
  { key: "dark", label: "Lights out", color: "#0a0a0a", borderColor: "#3f3f46" },
] as const;

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = "theme-menu";

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = theme === "system" ? resolvedTheme : theme;

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("keydown", onKeyDown);
    }

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const Icon = current === "dim" ? CloudMoon : current === "dark" ? Moon : Sun;

  return (
    <div className="relative" ref={ref}>
      <Button
        type="button"
        size="icon-sm"
        variant="ghost"
        aria-label="Theme"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
      >
        <Icon className="size-4" />
      </Button>

      {open && (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 top-full mt-2 z-50 w-40 rounded-lg border border-border bg-surface p-1 shadow-lg"
        >
          {themes.map(({ key, label, color, borderColor }) => (
            <button
              key={key}
              type="button"
              role="menuitemradio"
              aria-checked={current === key}
              onClick={() => {
                setTheme(key);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                current === key
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <span
                className="inline-block size-4 rounded-full shrink-0"
                style={{ backgroundColor: color, border: `1.5px solid ${borderColor}` }}
              />
              <span>{label}</span>
              {current === key && <span className="ml-auto text-xs">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

