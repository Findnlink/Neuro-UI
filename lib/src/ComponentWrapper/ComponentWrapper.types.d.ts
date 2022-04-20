import { HTMLAttributes } from 'react';
import { UtilInterface } from '../../util/interfaces';
export interface ComponentWrapperProps extends HTMLAttributes<HTMLElement>, UtilInterface {
    options: [{}];
    propsUnderComponent: boolean;
}
