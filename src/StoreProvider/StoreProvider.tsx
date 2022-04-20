import React, { useEffect } from 'react'
import { StoreProviderProps } from './StoreProvider.types'
import { _getClassNames } from '../../util/getClassNames'
import { useStore } from '../store'
import { Toast } from '../Toast'
//@ts-ignore
import scss from './StoreProvider.module.scss'

export const StoreProvider = ({ children, defaultTheme, ...props }: StoreProviderProps) => {
  const [theme, setTheme, toasts] = useStore((s) => [s.theme, s.setTheme, s.toasts])

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      const _theme = localStorage.getItem('theme')
      setTheme(_theme || 'dark')
    }
  }, [localStorage])

  const showToasts = () => {
    return (
      <div className={scss.toastContainer}>
        {toasts.map((toast, index) => (
          <Toast key={index} id={toast.id} type="default">
            {toast.children}
          </Toast>
        ))}
      </div>
    )
  }

  return (
    <div data-testid={'StoreProvider'} className={theme}>
      {showToasts()}
      {children}
    </div>
  )
}
