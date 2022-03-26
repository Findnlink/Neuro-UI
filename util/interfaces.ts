import { ReactNode } from 'react'

export interface UtilInterface {
  _class?: string
  primary?: boolean
  disabled?: boolean | undefined
  loading?: boolean
  scale?: 's' | 'm' | 'l' | 'xl' | 'xxl'
  weight?: 'light' | 'normal' | 'bold'
  margin?: '0' | 's' | 'm' | 'l' | 'xl'
  padding?: '0' | 's' | 'm' | 'l' | 'xl'
  htmlProps?: any
  // key?: number
  // ref?: any
}

export interface _getClassNamesProps extends UtilInterface {
  parent: string
  scss: any
}
