import { HTMLAttributes, ReactNode } from "react";
import { UtilInterface } from "../../util/interfaces";

export interface ButtonProps<>extends HTMLAttributes<HTMLButtonElement>,
    UtilInterface {
  children: ReactNode;
  /** Change the variant */
  primary?: boolean;
  /** Disable the button */
  disabled?: boolean;
  /** Size of the button */
  scale?: "s" | "m" | "l" | "xl";
  weight?: "light" | "normal" | "bold";
  href?: string;
}
