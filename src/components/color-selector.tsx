"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Palette } from "lucide-react";

const themes = [
  { name: "Neutro", value: "neutral", color: "#737373" },
  { name: "Rosa", value: "pink", color: "#ff2056" },
  { name: "Amarillo", value: "yellow", color: "#d9ab02" },
  { name: "Azul", value: "blue", color: "#155dfc" },
  { name: "Verde", value: "green", color: "#50bb13" },
  { name: "Violeta", value: "violet", color: "#9c0ca6" },
  { name: "Naranja", value: "orange", color: "#ff6a00" },
];

const MotionPalette = motion(Palette);

export function ColorSelector() {
  const [currentTheme, setCurrentTheme] = useState("neutral");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("portfolio-color-theme") || "neutral";
    setCurrentTheme(savedTheme);
    if (savedTheme !== "neutral") {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    if (theme === "neutral") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("portfolio-color-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("portfolio-color-theme", theme);
    }
  };

  const toggleTheme = () => {
    const currentIndex = themes.findIndex((t) => t.value === currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    handleThemeChange(nextTheme.value);
  };

  const isNeutral = currentTheme === "neutral";
  const sirenColors = themes
    .filter((t) => t.value !== "neutral")
    .map((t) => t.color);

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        className="absolute inset-0 z-10 w-full h-full cursor-pointer rounded-full outline-none"
        title="Alternar color de acento"
        aria-label="Alternar color de acento"
      />
      <div className="relative size-full flex items-center justify-center pointer-events-none">
        <MotionPalette
          className="size-5 md:size-6"
          animate={
            isNeutral
              ? {
                  color: [...sirenColors, sirenColors[0]],
                }
              : {
                  color: "currentColor",
                }
          }
          transition={
            isNeutral
              ? {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : { duration: 0.3 }
          }
        />
      </div>
    </>
  );
}
