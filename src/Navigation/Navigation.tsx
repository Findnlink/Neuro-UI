import React, { useState } from 'react'
import { NavigationProps } from './Navigation.types'
//@ts-ignore
import scss from './Navigation.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { Flex, Icon, Text } from '../'

export const Navigation = ({ children, footer, type, ...props }: NavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.navigation,
      scss,
      ...props
    })

    if (menuOpen) className.push(scss.menuOpen)
    if (type) className.push(scss[type])

    console.log('type', type, className)

    return className.join(' ')
  }

  return (
    <span data-testid={'Navigation'} className={getClassNames()} {...props}>
      <Flex
        onClick={() => setMenuOpen((prev) => !prev)}
        flexDirection="row"
        alignItems="center"
        pointer
        _class={scss.mobileMenuButton}
      >
        {menuOpen ? <Icon margin="0 xl" icon={'cross'} /> : <Icon margin="0 xl" icon={'menu'} />}
        {type === 'side' && <Text>Menu</Text>}
      </Flex>

      <nav>
        <div className={scss.dropdown}>{children}</div>
        {footer && <div className={scss.footer}>{footer}</div>}
      </nav>
    </span>
  )
}
