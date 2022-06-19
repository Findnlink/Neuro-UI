import { HTMLAttributes } from 'react';
import { UtilInterface } from '../../util/interfaces';
export interface ImageProps extends HTMLAttributes<HTMLImageElement>, UtilInterface {
    src: string | any;
    width?: string;
    height?: string;
    props?: any;
}
