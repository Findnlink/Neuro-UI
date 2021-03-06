import { HTMLAttributes } from 'react'
import { UtilInterface } from '../../util/interfaces'

export interface TextProps extends HTMLAttributes<HTMLElement>, UtilInterface {
  href?: string
  align?: 'left' | 'right' | 'center'
}
