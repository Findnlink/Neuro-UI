import { InputHTMLAttributes } from 'react';
export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    scale?: 's' | 'm' | 'l' | 'xl';
    weight?: 'light' | 'normal' | 'bold';
}
