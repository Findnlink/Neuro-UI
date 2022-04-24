declare type Store = {
    theme: string;
    setTheme: (theme: string) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    toasts: {
        children: string;
        id: number;
    }[];
    addToast: (toast: {
        children: string;
        id: number;
    }) => void;
    removeToast: (id: number) => void;
};
export declare const useStore: import("zustand").UseBoundStore<Store, import("zustand").StoreApi<Store>>;
export {};
