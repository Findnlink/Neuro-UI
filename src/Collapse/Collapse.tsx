import React, { useState } from 'react'
import { CollapseProps } from './Collapse.types'
//@ts-ignore
import scss from './Collapse.module.scss'
import { Icon } from '..'
import { _getClassNames } from '../../util/getClassNames'
import { useNavigate } from 'react-router-dom'

export const Collapse = ({ children, items, scale, weight, ...props }: CollapseProps) => {
  const [open, setOpen] = useState(false)
  let navigate = useNavigate()

  const getClassNames = () => {
    let _className = _getClassNames({
      parent: scss.collapse,
      scss,
      scale,
      weight
    })

    if (open) {
      _className.push(scss.open)
    } else {
      _className.push(scss.close)
    }

    return _className.join(' ')
  }

  return (
    <div data-testid={'Collapse'} className={getClassNames()} onClick={() => {}} {...props}>
      <div
        onClick={() => {
          setOpen((prev) => !prev)
        }}
        className={scss.wrapper}
      >
        <span>{children}</span>
        {items && <Icon icon={'arrow'} />}
      </div>

      {items && (
        <ul
          style={
            open
              ? {
                  maxHeight: items.length * 50 + 'px',
                  transitionDuration: items.length > 10 ? '0.5s' : '0.25s'
                }
              : {
                  maxHeight: '0px',
                  transitionDuration: items.length > 10 ? '0.5s' : '0.25s'
                }
          }
        >
          {items.map((item, index) => (
            <li key={index} onClick={() => navigate(item.toLowerCase().replace(/\s/g, ''))}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
