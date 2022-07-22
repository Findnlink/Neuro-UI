import React, { useEffect, useState } from 'react'
import { ModalProps } from './Modal.types'
//@ts-ignore
import scss from './Modal.module.scss'
import { createPortal } from 'react-dom'
import { Icon } from '../Icon/Icon'
import { Button } from '../Button/Button'
import { _getClassNames } from '../../util/getClassNames'

export const Modal = ({ children, open, onClose, type, onConfirm, i18n, ...props }: ModalProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.modal,
      scss,
      ...props
    })

    if (open) className.push(scss.open)
    else className.push(scss.closed)

    return className.join(' ')
  }

  function handleChildClick(e: any) {
    // Cancel onClose
    e.stopPropagation()
  }
  return (
    <div onClick={() => onClose()} className={getClassNames()}>
      <div onClick={handleChildClick} className={scss.inner}>
        <div className={scss.child}>{children}</div>
        <div className={scss.close} onClick={() => onClose()}>
          <Icon icon={'cross'} />
        </div>
        {type === 'confirm' && (
          <div className={scss.confirm}>
            <Button onClick={onClose}>{i18n ? i18n.no : 'Cancel'}</Button>
            <Button style={{ marginLeft: '10px' }} onClick={onConfirm} primary>
              {i18n ? i18n.yes : 'Confirm'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
