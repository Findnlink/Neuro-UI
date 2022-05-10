import { HTMLAttributes, ReactNode } from 'react'
import { UtilInterface } from '../../util/interfaces'

export interface FooterProps<>extends HTMLAttributes<HTMLButtonElement>, UtilInterface {
  children: ReactNode
}

export interface FooterItemProps<>extends HTMLAttributes<HTMLButtonElement>, UtilInterface {
  children: ReactNode
}
