import create from 'zustand'

type Store = {
  theme: string
  setTheme: (theme: string) => void
  toasts: { children: string; id: number }[]
  addToast: (toast: { children: string; id: number }) => void
  removeToast: (id: number) => void
}

export const useStore = create<Store>((set, get) => ({
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
  toasts: [],
  addToast: (toast) =>
    set((state) => {
      toasts: state.toasts.push(toast)
    }),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id)
    }))
}))
