import type { ColorVariants, SizeVariants, StyleVariant } from "./types";

const colorMap: Record<ColorVariants, string> = {
  default: "text-gray-800",
  primary: "text-blue-600",
  secondary: "text-purple-600",
  success: "text-green-600",
  warning: "text-yellow-600",
  danger: "text-red-600",
};

const hoverColorMap: Record<ColorVariants, string> = {
  default: "cursor-pointer hover:text-gray-900",
  primary: "cursor-pointer hover:text-blue-800",
  secondary: "cursor-pointer hover:text-purple-800",
  success: "cursor-pointer hover:text-green-800",
  warning: "cursor-pointer hover:text-yellow-700",
  danger: "cursor-pointer hover:text-red-800",
};

const sizeMap: Record<SizeVariants, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const variantMap: Record<StyleVariant, string> = {
  none: "",
  shadow: "drop-shadow-sm",
  bordered: "border-b border-current pb-0.5",
  faded: "opacity-70",
};

export {colorMap, hoverColorMap, sizeMap, variantMap}