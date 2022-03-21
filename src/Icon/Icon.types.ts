import { HTMLAttributes, ReactNode } from "react";
import { UtilInterface } from "../../util/interfaces";

export interface IconProps extends HTMLAttributes<HTMLElement>, UtilInterface {
  icon: string;
  color?: string;
  animation?: boolean;
}
