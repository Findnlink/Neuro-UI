import { HTMLAttributes, ReactNode } from 'react'
import { UtilInterface } from '../../util/interfaces'

export interface ImageProps<>extends UtilInterface {
  src: string
  width?: string
  height?: string
}
