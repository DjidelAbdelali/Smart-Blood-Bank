"use client";

import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "danger";
}

export default function Button({
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const baseVariants = {
    primary: "bg-red-600 text-white hover:bg-red-700 shadow-md",
    secondary: "bg-white text-red-600 border border-red-200 hover:bg-red-50 shadow-sm",
    outline: "bg-transparent border border-red-500 text-red-600 hover:bg-red-50",
    danger: "bg-rose-700 text-white hover:bg-rose-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${baseVariants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
