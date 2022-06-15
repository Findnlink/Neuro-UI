/// <reference types="react" />
import { CardProps, CardHeaderProps, CardContentProps } from './Card.types';
export declare const Card: ({ children, loading, onClick, disabled, ...props }: CardProps) => JSX.Element;
export declare const CardHeader: ({ children, type, ...props }: CardHeaderProps) => JSX.Element;
export declare const CardContent: ({ children, ...props }: CardContentProps) => JSX.Element;
