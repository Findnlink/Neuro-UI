import React, { useState } from 'react'
import { TabsProps } from './Tabs.types'
//@ts-ignore
import scss from './Tabs.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { AnimatePresence, motion } from 'framer-motion'

export const Tabs = ({ children, ...props }: TabsProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.tabs,
      scss,
      ...props
    })

    return className.join(' ')
  }

  const [selectedTab, setSelectedTab] = useState(children[0])

  return (
    <div data-testid={'Tabs'} className={getClassNames()}>
      <ul>
        {children.map((item: any, index: number) => (
          <motion.li
            key={item}
            className={item === selectedTab ? scss.selected : ''}
            onClick={() => setSelectedTab(item)}
          >
            {item === selectedTab ? (
              <motion.div className={scss.overlay} layoutId="overlay" />
            ) : null}

            <span className={scss.item}>{item}</span>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={selectedTab ? selectedTab : 'empty'}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }}
        >
          {selectedTab ? selectedTab : '😋'}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
