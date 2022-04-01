import { InputHTMLAttributes } from 'react';
import { UtilInterface } from '../../util/interfaces';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, UtilInterface {
    /** Should it be a password input? */
    type?: 'text' | 'password';
    /** Is the value valid or not? */
    error?: boolean;
    errorMessage?: string;
    icon?: any;
    limit?: true | false;
    value: string;
}
