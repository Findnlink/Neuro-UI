import React, { useState } from 'react'
import { Modal } from './Modal'
import { Button } from '../Button/Button'

export default {
  title: 'Modal',
}

export const OpenModal = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div id="modal-root"></div>

      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        //selector="#modal-root"
      >
        <div>testdawdawdawdawdawd</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </Modal>
    </>
  )
}

export const Confirm = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div id="modal-root"></div>

      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        type="confirm"
        onConfirm={() => {
          //console.log('Confirm')
        }}
        //selector="#modal-root"
      >
        <div>testdawdawdawdawdawd</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </Modal>
    </>
  )
}
