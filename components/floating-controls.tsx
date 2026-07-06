"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLang } from "@/components/language";
import { MoonIcon, SunIcon } from "@/components/icons";

export function FloatingControls() {
  const { lang, toggle } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="floating">
      <button className="fbtn" onClick={toggle} aria-label="Language" type="button">
        <span>{lang.toUpperCase()}</span>
      </button>
      <button className="fbtn" onClick={toggleTheme} aria-label="Theme" type="button">
        {/* Avoid a hydration mismatch: render the icon only once mounted. */}
        {mounted ? (
          resolvedTheme === "dark" ? (
            <SunIcon />
          ) : (
            <MoonIcon />
          )
        ) : (
          <MoonIcon />
        )}
      </button>
    </div>
  );
}
