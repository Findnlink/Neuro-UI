import React from 'react'
import { TagProps } from './Tag.types'
//@ts-ignore
import scss from './Tag.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { Flex } from '../'
import { animations, motion } from 'framer-motion'

export const Tag = ({ children, href, ...props }: TagProps) => {
  const getClassNames = () => {
    let className = _getClassNames({ parent: scss.tag, scss, ...props })

    return className.join(' ')
  }

  const container = {
    show: {
      transition: {
        type: 'spring',
        stiffness: 0,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { scale: 0.8, opacity: 0.1 },
    show: { scale: 1, opacity: 1 }
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Flex margin="s" flexDirection="row" flexWrap="wrap">
        {typeof children === 'string' ? (
          <a
            href={typeof href === 'string' ? href : '//:0'}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={'Tag'}
            className={getClassNames()}
          >
            {children}
          </a>
        ) : (
          children.map((tag: string | any, index: number) => (
            <motion.a
              href={href && href[index] !== '' ? href[index] : '//:0'}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              data-testid={'Tag'}
              className={getClassNames()}
              variants={item}
            >
              {tag}
            </motion.a>
          ))
        )}
      </Flex>
    </motion.div>
  )
}
