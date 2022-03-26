import { HTMLAttributes, ReactNode } from 'react'
import { UtilInterface } from '../../util/interfaces'

export interface ButtonProps<>extends HTMLAttributes<HTMLButtonElement>, UtilInterface {
  children: ReactNode
  href?: string
}
