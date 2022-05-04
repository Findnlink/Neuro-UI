import { HTMLAttributes, ReactNode } from 'react'
import { UtilInterface } from '../../util/interfaces'

export interface TabsProps<>extends HTMLAttributes<HTMLDivElement>, UtilInterface {
  tabs: string[]
  children?: string[]
  href?: string | string[]
  hover?: boolean
  id?: string
}
