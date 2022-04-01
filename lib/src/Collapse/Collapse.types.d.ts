import { HTMLAttributes } from "react";
import { UtilInterface } from "../../util/interfaces";
export interface CollapseProps extends HTMLAttributes<HTMLElement>, UtilInterface {
    children: string;
    items?: string[];
}
