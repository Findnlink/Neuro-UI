import React, { useEffect, useState } from 'react'
import { ToastProps } from './Toast.types'
//@ts-ignore
import scss from './Toast.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { useStore } from '../store'
import { motion } from 'framer-motion'

export const Toast = ({ children, id, type, ...props }: ToastProps) => {
  const [removeToast] = useStore((s) => [s.removeToast])
  const [animate, setAnimate] = useState({ x: -50, y: 0, scale: 1, rotate: 0, opacity: 1 })

  // Known Bug with multiple toasts either because of zustand (removeToast(id)) or timeouts
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate({ x: 200, y: 0, scale: 1, rotate: 0, opacity: 0 })
      const timeout1 = setTimeout(() => {
        removeToast(id)
        clearTimeout(timeout1)
      }, 2500)
    }, 2000)

    // return () => {
    //   clearTimeout(timeout)
    //   removeToast(id)
    // }
  }, [])

  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.toast,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <motion.div animate={animate}>
      <div data-testid={'Toast'} className={getClassNames()}>
        {children}
      </div>
    </motion.div>
  )
}
