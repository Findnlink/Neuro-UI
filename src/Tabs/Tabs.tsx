import React, { useContext, useEffect, useState } from 'react'
import {
  TabsProps,
  TabsHeaderProps,
  TabProps,
  TabsContentProps,
  TabsContextProps
} from './Tabs.types'
//@ts-ignore
import scss from './Tabs.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { AnimatePresence, motion } from 'framer-motion'
import { ComponentContext, ComponentProvider } from '../../util/component-context'
import { Flex } from '../'

export const Tabs = ({ children, hover, id, responsive, direction, ...props }: TabsProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.tabs,
      scss,
      ...props
    })

    return className.join(' ')
  }

  const [_selectedIndex, _setSelectedIndex] = useState<null | number>(null)

  const ctx: TabsContextProps = {
    selectedIndex: _selectedIndex,
    setSelectedIndex: _setSelectedIndex,
    hover: hover ? hover : false,
    id: id ? id : 'id',
    responsive: responsive ? responsive : false,
    direction: direction ? direction : 'row'
  }

  return (
    <ComponentProvider value={ctx}>
      <div {...props} data-testid={'Tabs'} data-responsive={responsive} className={getClassNames()}>
        {children}
      </div>
    </ComponentProvider>
  )
}

export const TabsHeader = ({ children, ...props }: TabsHeaderProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.tabsHeader,
      scss,
      ...props
    })

    return className.join(' ')
  }

  const ctx: TabsContextProps = useContext(ComponentContext)

  // set default to first element
  useEffect(() => {
    if (!ctx.hover) {
      ctx.setSelectedIndex(0)
    }
  }, [])

  return (
    <Flex className={getClassNames()} flexDirection={ctx.direction}>
      {children}
    </Flex>
  )
}

export const Tab = ({ children, href, index, onClick, ...props }: TabProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.tab,
      scss,
      ...props
    })

    if (index === ctx.selectedIndex) className.push(scss.selected)

    return className.join(' ')
  }

  const ctx: TabsContextProps = useContext(ComponentContext)

  return (
    <motion.a
      className={getClassNames()}
      key={index}
      onClick={(e) => {
        if (onClick) onClick(e)
        if (href && href === '') e.preventDefault()
        if (ctx.hover) return
        ctx.setSelectedIndex(index)
      }}
      onHoverStart={() => {
        if (!ctx.hover) return
        ctx.setSelectedIndex(index)
      }}
      onHoverEnd={() => {
        if (!ctx.hover) return
        ctx.setSelectedIndex(null)
      }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-hover={ctx.hover}
    >
      {index === ctx.selectedIndex ? (
        <motion.div
          key={index}
          className={scss.overlay}
          transition={spring}
          layoutId={'overlay' + ctx.id}
          animate={{ opacity: 1 }}
        />
      ) : null}

      <span className={scss.item}>{children}</span>
    </motion.a>
  )
}

export const TabsContent = ({ children, id, ...props }: TabsContentProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.tabsContent,
      scss,
      ...props
    })

    return className.join(' ')
  }

  const ctx = useContext(ComponentContext)

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={ctx.selectedTab ? ctx.selectedTab : 'empty'}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.15 }}
        className={getClassNames()}
      >
        {ctx.selectedIndex !== null ? children[ctx.selectedIndex] : null}
      </motion.div>
    </AnimatePresence>
  )
}

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30
}
