"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        type="button"
        className="absolute inset-0 z-10 w-full h-full cursor-pointer rounded-full outline-none"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Alternar tema oscuro y claro"
      />
      <div className="relative size-full flex items-center justify-center pointer-events-none">
        <SunIcon className="size-5 md:size-6 block dark:hidden" />
        <MoonIcon className="size-5 md:size-6 hidden dark:block" />
      </div>
    </>
  );
}
