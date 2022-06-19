import { CSSProperties, ReactNode } from 'react'

//TODO: Fix disabled?: boolean, add animation: ???
export interface UtilInterface {
  _class?: string
  style?: CSSProperties
  primary?: boolean
  disabled?: boolean
  loading?: boolean
  error?: boolean
  pointer?: boolean
  animation?: boolean
  color?: string
  backgroundColor?: string
  scale?: 's' | 'm' | 'l' | 'xl' | 'xxl'
  weight?: 'light' | 'normal' | 'bold'
  margin?: '0' | 's' | 'm' | 'l' | 'xl' | string
  padding?: '0' | 's' | 'm' | 'l' | 'xl' | string
  htmlProps?: any
  variables?: { default: {}; hover: {}; active: {} }
  // key?: number
  // ref?: any
}

export interface _getClassNamesProps extends UtilInterface {
  parent: string
  scss: any
}
