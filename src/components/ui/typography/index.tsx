import { clsx } from "clsx";
import type { TypographyProps } from "./types";

import {colorMap, hoverColorMap, sizeMap, variantMap} from "./styled"


const Typography: React.FC<TypographyProps> = ({
  tag = "p",
  color = "default",
  size = "md",
  children,
  className = "",
  variant = "none",
  isHoverable,
  ...props
}) => {
    
  const Component = tag as React.ElementType;

  return (
    <Component
      className={clsx(
        colorMap[color],
        sizeMap[size],
        variantMap[variant],
        isHoverable && hoverColorMap[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
