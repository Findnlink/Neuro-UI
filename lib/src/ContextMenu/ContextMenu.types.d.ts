export interface ContextMenuProps {
    children: any;
    menu: any;
    open: boolean;
    setOpen: any;
    location: {
        x: number;
        y: number;
    };
    setLocation: any;
    isDisabled?: boolean;
}
