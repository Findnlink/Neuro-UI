import { HTMLAttributes, ReactNode } from 'react';
import { UtilInterface } from '../../util/interfaces';
export interface CheckboxProps extends HTMLAttributes<HTMLInputElement>, UtilInterface {
    children: ReactNode;
    checked: boolean;
    error?: boolean;
}
