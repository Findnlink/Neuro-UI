import { HTMLAttributes } from 'react';
import { UtilInterface } from '../../util/interfaces';
export interface ModalProps extends HTMLAttributes<HTMLDivElement>, UtilInterface {
    children: any;
    open: boolean;
    onClose: () => void;
    type?: null | 'confirm';
    onConfirm?: () => void;
    i18n?: {
        yes: string;
        no: string;
    };
}
