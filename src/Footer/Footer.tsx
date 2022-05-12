import React from 'react'
import { FooterProps, FooterItemProps } from './Footer.types'
//@ts-ignore
import scss from './Footer.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { Flex } from '../Flex'

export const Footer = ({ children, ...props }: FooterProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.footer,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-around"
      data-testid={'Footer'}
      className={getClassNames()}
    >
      {children}
    </Flex>
  )
}

export const FooterItem = ({ children, ...props }: FooterItemProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.footerItem,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <div data-testid={'FooterItem'} className={getClassNames()}>
      {children}
    </div>
  )
}
