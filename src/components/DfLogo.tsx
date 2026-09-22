import React from "react";

interface DfLogoProps {
  className?: string;
  markSize?: number;
  showSystemsLabel?: boolean;
  theme?: "dark" | "light";
  onClick?: () => void;
  idPrefix?: string;
}

export const DfLogo: React.FC<DfLogoProps> = ({
  className = "",
  markSize = 44,
  showSystemsLabel = true,
  theme = "light",
  onClick,
  idPrefix = "df-logo",
}) => {
  const isDark = theme === "dark";
  const primaryTextColor = isDark ? "text-white" : "text-[#0B1728]";
  const secondaryColor = isDark ? "#A2B5CC" : "#617594"; // Droppfloww signature slate blue accent

  return (
    <div
      id={`${idPrefix}-lockup`}
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 select-none ${
        onClick ? "cursor-pointer group" : ""
      } ${className}`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label="Droppfloww Systems"
    >
      {/* "df" Vector Monogram Mark */}
      <div
        className="relative flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.04]"
        style={{ width: markSize, height: markSize }}
      >
        <img
          src="/df-monogram.svg"
          alt="Droppfloww Systems df mark"
          className="w-full h-full object-contain drop-shadow-[0_1px_2px_rgba(11,23,40,0.06)]"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Typography Lockup: "droppfloww" + "SYSTEMS" */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline">
          <span
            className={`font-extrabold tracking-[-0.035em] leading-none ${primaryTextColor}`}
            style={{ fontSize: Math.max(20, Math.round(markSize * 0.56)) }}
          >
            droppfloww
          </span>
        </div>
        {showSystemsLabel && (
          <span
            className="font-bold tracking-[0.26em] uppercase leading-none mt-1"
            style={{
              fontSize: Math.max(9, Math.round(markSize * 0.22)),
              color: secondaryColor,
            }}
          >
            SYSTEMS
          </span>
        )}
      </div>
    </div>
  );
};
