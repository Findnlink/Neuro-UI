import { HTMLAttributes } from 'react';
import { UtilInterface } from '../../util/interfaces';
export interface ToggleProps extends HTMLAttributes<HTMLDivElement>, UtilInterface {
    onClick: (e: any) => any;
    value: boolean;
}
