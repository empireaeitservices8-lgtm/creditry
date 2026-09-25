import React from "react";

interface GoldDividerProps {
  className?: string;
  theme?: "light" | "dark";
  width?: "sm" | "md" | "lg" | "full";
}

export default function GoldDivider({
  className = "",
  theme = "light",
  width = "md",
}: GoldDividerProps) {
  const isDark = theme === "dark";

  const widthClasses = {
    sm: "max-w-[120px]",
    md: "max-w-[220px]",
    lg: "max-w-[340px]",
    full: "w-full max-w-full",
  }[width];

  return (
    <div className={`flex items-center justify-center gap-2.5 mx-auto ${widthClasses} ${className}`}>
      <span
        className={`h-[1px] flex-1 ${
          isDark
            ? "bg-gradient-to-r from-transparent via-gold-500/70 to-gold-400"
            : "bg-gradient-to-r from-transparent via-gold-600/50 to-gold-700"
        }`}
      />
      <span className="w-1.5 h-1.5 rotate-45 bg-gold-500 shrink-0 shadow-sm" />
      <span
        className={`h-[1px] flex-1 ${
          isDark
            ? "bg-gradient-to-l from-transparent via-gold-500/70 to-gold-400"
            : "bg-gradient-to-l from-transparent via-gold-600/50 to-gold-700"
        }`}
      />
    </div>
  );
}
