import React from 'react'
import { ButtonGroupProps } from './ButtonGroup.types'
//@ts-ignore
import scss from './ButtonGroup.module.scss'
import { Button } from '../Button/Button'
import { _getClassNames } from '../../util/getClassNames'

export const ButtonGroup = ({ selected, setSelected, buttons, ...props }: ButtonGroupProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.buttonGroup,
      scss,
      ...props
    })

    return className.join(' ')
  }

  return (
    <div className={getClassNames()}>
      {buttons.map((button, index) =>
        typeof button === 'string' ? (
          <Button
            margin={'s'}
            htmlProps={{ key: index }}
            onClick={() => setSelected(button)}
            primary={button === selected}
            disabled={props.disabled}
            key={index}
          >
            {button}
          </Button>
        ) : (
          <Button
            margin={'s'}
            htmlProps={{ key: index }}
            scale={props.scale}
            onClick={() => setSelected(button.children)}
            primary={selected === button.children}
            key={index}
            {...button}
          >
            {button.children}
          </Button>
        )
      )}
    </div>
  )
}
