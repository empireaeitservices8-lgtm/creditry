import React from "react";

interface CredtreeBrandTextProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  align?: "left" | "center";
}

export default function CredtreeBrandText({
  size = "lg",
  className = "",
  align = "left",
}: CredtreeBrandTextProps) {
  // Proportional sizing configurations
  const config = {
    sm: {
      title: "text-xl sm:text-2xl tracking-[0.12em]",
      spacing: "gap-1.5 sm:gap-2",
      subtitle: "text-[8px] sm:text-[9px] tracking-[0.22em]",
      diamond: "w-1.5 h-1.5",
      diamondRow: "w-[50%] mt-1",
      row2Margin: "mt-1.5",
      credTreeGap: "",
    },
    md: {
      title: "text-2xl sm:text-3xl tracking-[0.14em]",
      spacing: "gap-2 sm:gap-2.5",
      subtitle: "text-[9px] sm:text-[11px] tracking-[0.24em]",
      diamond: "w-2 h-2",
      diamondRow: "w-[52%] mt-1",
      row2Margin: "mt-2",
      credTreeGap: "",
    },
    lg: {
      title: "text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-[0.14em]",
      spacing: "gap-2.5 sm:gap-3.5",
      subtitle: "text-[10px] sm:text-xs md:text-[13px] tracking-[0.28em]",
      diamond: "w-2 h-2 sm:w-2.5 sm:h-2.5",
      diamondRow: "w-[54%] mt-1 sm:mt-1.5",
      row2Margin: "mt-2 sm:mt-2.5",
      credTreeGap: "",
    },
    xl: {
      title: "text-4xl sm:text-5xl md:text-6xl tracking-[0.15em]",
      spacing: "gap-3 sm:gap-4",
      subtitle: "text-xs sm:text-sm md:text-base tracking-[0.3em]",
      diamond: "w-2.5 h-2.5 sm:w-3 sm:h-3",
      diamondRow: "w-[55%] mt-1.5 sm:mt-2",
      row2Margin: "mt-2.5 sm:mt-3",
      credTreeGap: "",
    },
  }[size];

  const containerAlign = align === "center" ? "items-center text-center" : "items-center text-left";

  return (
    <div
      className={`inline-flex flex-col select-none ${containerAlign} ${className}`}
      aria-label="Credtree Financial Services"
    >
      {/* Row 1: CRED (Dark Green) & TREE (Metallic Gold Gradient) */}
      <div
        className={`flex items-baseline font-serif font-black leading-none ${config.title}`}
      >
        <span className="text-[#063B28] filter drop-shadow-[0_1px_1px_rgba(6,59,40,0.25)]">
          CRED
        </span>
        <span
          className="bg-gradient-to-b from-[#F5D88D] via-[#D8A635] via-[48%] via-[#B57B18] to-[#875507] bg-clip-text text-transparent filter drop-shadow-[0_1px_1px_rgba(135,85,7,0.3)]"
        >
          TREE
        </span>
      </div>

      {/* Row 2: Left Line | FINANCIAL SERVICES | Right Line */}
      <div className={`w-full flex items-center justify-between ${config.spacing} ${config.row2Margin}`}>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C89332] to-[#C89332] opacity-80" />
        <span
          className={`font-sans font-bold text-[#1A2420] uppercase whitespace-nowrap ${config.subtitle}`}
        >
          FINANCIAL SERVICES
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C89332] to-[#C89332] opacity-80" />
      </div>

      {/* Row 3: Left Line | ◆ Diamond Ornament | Right Line */}
      <div className={`flex items-center justify-center gap-2 sm:gap-2.5 ${config.diamondRow}`}>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C89332]/60 to-[#C89332]" />
        <div
          className={`${config.diamond} rotate-45 bg-gradient-to-br from-[#F5D88D] via-[#D8A635] to-[#875507] border-[0.5px] border-[#F5D88D]/70 shadow-[0_0_2px_rgba(200,147,50,0.4)] shrink-0`}
        />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C89332]/60 to-[#C89332]" />
      </div>
    </div>
  );
}
