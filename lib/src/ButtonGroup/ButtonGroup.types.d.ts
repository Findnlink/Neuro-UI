import { HTMLAttributes } from 'react';
import { UtilInterface } from '../../util/interfaces';
import { ButtonProps } from '../Button/Button.types';
export interface ButtonGroupProps extends HTMLAttributes<HTMLElement>, UtilInterface {
    selected: string;
    buttons: [ButtonProps];
    setSelected: any;
}
