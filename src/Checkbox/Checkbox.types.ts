import { HTMLAttributes, ReactNode } from 'react'

export interface CheckboxProps<>extends HTMLAttributes<HTMLInputElement> {
  children: ReactNode
  checked: boolean
  error?: boolean
  disabled?: boolean
  size?: 's' | 'm' | 'l' | 'xl'
  weight?: 'light' | 'normal' | 'bold'
}
