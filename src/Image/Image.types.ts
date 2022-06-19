import { HTMLAttributes, ReactNode } from 'react'
import { UtilInterface } from '../../util/interfaces'

export interface StaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
}
interface StaticRequire {
  default: StaticImageData
}

declare type StaticImport = StaticRequire | StaticImageData

export interface ImageProps<>extends UtilInterface {
  src: string | StaticImport
  width?: string
  height?: string
  props?: any
}
