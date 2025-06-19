import type { ReactNode } from "react";

export type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
export type ColorVariants = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
export type SizeVariants = "xs" | "sm" | "md" | "lg" | "xl";
export type StyleVariant = "none" | "shadow" | "bordered" | "faded";
export type TypographyProps = {
  tag?: TagVariants;
  children: ReactNode;
  color?: ColorVariants;
  size?: SizeVariants;
  className?: string;
  isHoverable?: boolean;
  variant?: StyleVariant;
};