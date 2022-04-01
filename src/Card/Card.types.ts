import { HTMLAttributes, ReactNode } from 'react'
import { UtilInterface } from '../../util/interfaces'

export interface CardProps<>extends HTMLAttributes<HTMLDivElement>, UtilInterface {
  children: any
}
