import { HTMLAttributes, ReactNode } from 'react'
import { UtilInterface } from '../../util/interfaces'

export interface TagProps<>extends HTMLAttributes<HTMLDivElement>, UtilInterface {
  children: string | string[] | any | any[]
  href?: string | string[]
}
