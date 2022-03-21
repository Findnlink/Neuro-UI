import { HTMLAttributes, ReactNode } from "react";
import { UtilInterface } from "../../util/interfaces";

export interface CodeProps<>extends HTMLAttributes<HTMLElement>, UtilInterface {
  children: string;
  editable?: boolean;
  onChange?: any;
}
