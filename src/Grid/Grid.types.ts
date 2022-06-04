import { HTMLAttributes } from 'react'
import { UtilInterface } from '../../util/interfaces'

export interface GridProps<>extends HTMLAttributes<HTMLDivElement>, UtilInterface {
  children: any
  center?: boolean
}
