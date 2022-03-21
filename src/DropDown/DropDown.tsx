import React, { useState } from 'react'
import { DropDownProps, DropDownItemProps } from './DropDown.types'
//@ts-ignore
import scss from './DropDown.module.scss'

export const DropDown = ({ items, selected, setSelected, placeholder }: DropDownProps) => {
  const Item = ({ children, disabled, index }: DropDownItemProps) => {
    return (
      <li
        className={selected === index ? scss.selected : ''}
        key={index}
        onClick={() => setSelected(index)}
      >
        {children}
      </li>
    )
  }

  const [open, setOpen] = useState(false)

  return (
    <div
      data-testid={'DropDown'}
      className={scss.dropDown}
      onClick={() => {
        setOpen((prev) => !prev)
      }}
    >
      <div className={scss.header}>
        {selected !== null ? items[selected].children : placeholder}
      </div>
      <ul
        className={open ? scss.open + ' ' + scss.itemWrapper : scss.close + ' ' + scss.itemWrapper}
      >
        {items.map((item, index) => (
          <Item index={index} disabled={item.disabled}>
            {item.children}
          </Item>
        ))}
      </ul>
    </div>
  )
}
