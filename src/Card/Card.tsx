import React, { useState } from 'react'
import { CardProps, CardHeaderProps, CardContentProps } from './Card.types'
//@ts-ignore
import scss from './Card.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { motion } from 'framer-motion'

export const Card = ({ children, loading, onClick, disabled, ...props }: CardProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.card,
      scss,
      loading,
      disabled,
      ...props
    })

    return className.join(' ')
  }

  const [hover, setHover] = useState(false)

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { delay: hover ? 0 : 0.2, duration: 0.2 }
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      data-testid={'Card'}
      className={getClassNames()}
      onHoverStart={() => {
        setHover(true)
      }}
      onClick={(e: any) => {
        if (disabled || loading) return
        if (onClick) onClick(e)
      }}
    >
      {!loading && <>{children}</>}
    </motion.div>
  )
}

export const CardHeader = ({ children, type, ...props }: CardHeaderProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.header,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <div data-testid={'CardHeader'} className={getClassNames()}>
      {children}
    </div>
  )
}

export const CardContent = ({ children, ...props }: CardContentProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.content,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <div data-testid={'CardContent'} className={getClassNames()}>
      {children}
    </div>
  )
}
