import { ReactNode } from 'react';
import { UtilInterface } from '../../util/interfaces';
export interface NavigationProps extends UtilInterface {
    children: ReactNode;
    type: 'side' | 'top';
    footer?: ReactNode;
}
