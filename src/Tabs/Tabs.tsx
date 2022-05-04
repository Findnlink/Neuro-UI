import React, { useState } from 'react'
import { TabsProps } from './Tabs.types'
//@ts-ignore
import scss from './Tabs.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { AnimatePresence, motion } from 'framer-motion'

export const Tabs = ({ tabs, children, href, hover, id, ...props }: TabsProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.tabs,
      scss,
      ...props
    })

    return className.join(' ')
  }

  const [selectedTab, setSelectedTab] = useState(hover ? null : tabs[0])
  const [selectedIndex, setSelectedIndex] = useState(hover ? null : 0)

  return (
    <div {...props} data-testid={'Tabs'} className={getClassNames()}>
      <ul>
        {tabs.map((item: any, index: number) => (
          <motion.a
            key={item + index}
            className={item === selectedTab ? scss.selected : ''}
            onClick={() => {
              if (hover) return
              setSelectedTab(item)
              setSelectedIndex(index)
            }}
            onHoverStart={() => {
              if (!hover) return
              setSelectedTab(item)
              setSelectedIndex(index)
            }}
            onHoverEnd={() => {
              if (!hover) return
              setSelectedTab(null)
              setSelectedIndex(null)
            }}
            href={href && href[index] !== '' ? href[index] : '//:0'}
            target="_blank"
            rel="noopener noreferrer"
            data-hover={hover}
          >
            {item === selectedTab ? (
              <motion.div
                key={item + index}
                className={scss.overlay}
                transition={spring}
                layoutId={'overlay' + id}
                animate={{ opacity: 1 }}
              />
            ) : null}

            <span className={scss.item}>{item}</span>
          </motion.a>
        ))}
      </ul>

      {children && (
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab : 'empty'}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            {selectedIndex !== null ? children[selectedIndex] : null}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30
}
