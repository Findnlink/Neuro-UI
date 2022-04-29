import React from 'react'
import { ErrorMessageProps } from './ErrorMessage.types'
//@ts-ignore
import scss from './ErrorMessage.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { AnimatePresence, motion } from 'framer-motion'

export const ErrorMessage = ({ isVisible, children, ...props }: ErrorMessageProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.errorMessage,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          data-testid={'ErrorMessage'}
          data-isvisible={isVisible}
          layout
          className={getClassNames()}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 100 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
