export interface UtilInterface {
    _class?: string;
    primary?: boolean;
    disabled?: boolean;
    loading?: boolean;
    error?: boolean;
    animation?: boolean;
    scale?: 's' | 'm' | 'l' | 'xl' | 'xxl';
    weight?: 'light' | 'normal' | 'bold';
    margin?: '0' | 's' | 'm' | 'l' | 'xl';
    padding?: '0' | 's' | 'm' | 'l' | 'xl';
    htmlProps?: any;
}
export interface _getClassNamesProps extends UtilInterface {
    parent: string;
    scss: any;
}
