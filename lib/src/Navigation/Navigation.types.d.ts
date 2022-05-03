import { UtilInterface } from '../../util/interfaces';
export interface NavigationProps extends UtilInterface {
    logo?: string;
    children: [];
    type: 'horizontal' | 'vertical';
}
