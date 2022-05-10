import { HTMLAttributes, ReactNode } from 'react'
import { UtilInterface } from '../../util/interfaces'

export interface TabsProps<>extends HTMLAttributes<HTMLDivElement>, UtilInterface {
  children: ReactNode
  id?: string
  hover?: boolean
}

export interface TabsHeaderProps<>extends HTMLAttributes<HTMLUListElement>, UtilInterface {
  children: ReactNode
}

export interface TabProps<>extends HTMLAttributes<HTMLDivElement>, UtilInterface {
  children: string | ReactNode
  href?: string
  index: number
}

export interface TabsContentProps<>extends HTMLAttributes<HTMLDivElement>, UtilInterface {
  children: string[]
}

export interface TabsContextProps {
  selectedIndex: number | null
  setSelectedIndex: (selectedIndex: number | null) => void
  hover: boolean
  id: string
}
