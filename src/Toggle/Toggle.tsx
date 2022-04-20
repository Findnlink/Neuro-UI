import React, { useState } from 'react'
import { ToggleProps } from './Toggle.types'
//@ts-ignore
import scss from './Toggle.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { motion } from 'framer-motion'

export const Toggle = ({ onClick, value, disabled, ...props }: ToggleProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.switch,
      scss,
      disabled,
      ...props
    })

    return className.join(' ')
  }

  return (
    <div
      className={getClassNames()}
      data-ison={value}
      onClick={(e) => {
        if (disabled) return
        if (onClick) onClick(e)
      }}
    >
      <motion.div className={scss.handle} layout transition={spring} />
    </div>
  )
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
}
