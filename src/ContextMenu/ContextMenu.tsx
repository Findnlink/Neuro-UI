import React, { useState, useEffect, useRef } from 'react'
import { ContextMenuProps } from './ContextMenu.types'
//@ts-ignore
import styles from './ContextMenu.module.scss'

export const ContextMenu = ({
  children,
  menu,
  open,
  setOpen,
  location,
  setLocation,
  isDisabled,
}: ContextMenuProps) => {
  const menuRef = useRef(null)

  //Close Context Menu
  useEffect(() => {
    if (isDisabled) setOpen(false)
  }, [isDisabled])

  const handleClick = (e: any) => {
    if (isDisabled) return

    setOpen(true)
    setLocation({ x: e.pageX, y: e.pageY })
  }

  const onClickOff = (event: MouseEvent) => {
    //@ts-ignore
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', onClickOff)

    return () => {
      document.removeEventListener('mousedown', onClickOff)
    }
  }, [])

  return (
    <>
      {React.cloneElement(children, {
        onContextMenu: (event: MouseEvent) => {
          event.preventDefault()
          handleClick(event)
        },
      })}
      {open ? (
        <div style={{ left: location.x, top: location.y }} ref={menuRef} className={styles.menu}>
          {menu}
        </div>
      ) : null}
    </>
  )
}
