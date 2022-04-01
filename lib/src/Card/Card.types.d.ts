import { HTMLAttributes } from "react";
import { UtilInterface } from "../../util/interfaces";
export interface CardProps extends HTMLAttributes<HTMLElement>, UtilInterface {
    children: any;
}
