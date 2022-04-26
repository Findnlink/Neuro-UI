import { HTMLAttributes, ReactNode } from 'react'
import { UtilInterface } from '../../util/interfaces'

export interface CardProps<>extends HTMLAttributes<HTMLDivElement>, UtilInterface {
  children: any
  type?: 'image' | ''
  href?: string
}

export interface CardHeaderProps<>extends HTMLAttributes<HTMLDivElement>, UtilInterface {
  children: any
  type?: 'image' | ''
  href?: string
}

export interface CardContentProps<>extends HTMLAttributes<HTMLDivElement>, UtilInterface {
  children: any
}
