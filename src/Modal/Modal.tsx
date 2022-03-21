import React, { useEffect, useState } from 'react'
import { ModalProps } from './Modal.types'
//@ts-ignore
import scss from './Modal.module.scss'
import { createPortal } from 'react-dom'
import { Icon } from '../Icon/Icon'
import { Button } from '../Button/Button'

export const Modal = ({ children, open, onClose, type, onConfirm, i18n }: ModalProps) => {
  function handleChildClick(e: any) {
    // Cancel onClose
    e.stopPropagation()
  }
  return (
    <div
      onClick={() => onClose()}
      className={open ? scss.modal + ' ' + scss.open : scss.modal + ' ' + scss.closed}
    >
      <div onClick={handleChildClick} className={scss.inner}>
        {children}
        <div className={scss.close} onClick={() => onClose()}>
          <Icon icon={'cross'} color={'white'} />
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
