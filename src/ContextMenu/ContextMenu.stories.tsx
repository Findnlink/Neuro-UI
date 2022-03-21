import React, { useState } from 'react'
import { ContextMenu } from './ContextMenu'

export default {
  title: 'ContextMenu',
}

export const Menu = () => {
  const [open, setOpen] = useState(false)
  const [location, setLocation] = useState({ x: 0, y: 0 })
  return (
    <>
      <ContextMenu
        menu={
          <div onClick={() => setOpen(false)}>
            <button>Edit Item</button>
            <button>Delete Item</button>
          </div>
        }
        open={open}
        setOpen={setOpen}
        location={location}
        setLocation={setLocation}
      >
        <div
          onClick={(e) => {
            setLocation({ x: e.pageX, y: e.pageY })
            setOpen(true)
          }}
          style={{ color: 'var(--text100)' }}
        >
          Right Click Me
        </div>
      </ContextMenu>
    </>
  )
}
