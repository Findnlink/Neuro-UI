import { HTMLAttributes, ReactNode } from 'react'
import { UtilInterface } from '../../util/interfaces'

export interface TagProps<>extends HTMLAttributes<HTMLDivElement>, UtilInterface {
  children: string | [string]
  href?: string | [string]
}
