import React, { useEffect, useState } from 'react'
import ItemProps from './Item.types'
//@ts-ignore
import styles from './Item.module.scss'
//import 'react-loading-skeleton/dist/skeleton.css'
import { Icon } from '../../Icon'
import { ContextMenu } from '../../ContextMenu/ContextMenu'

const Item = ({
  text,
  position,
  _id,
  columnId,
  createdAt,
  updatedAt,
  isDragging,
  _deleteItem,
  columnIndex,
  itemIndex,
  _editItem,
  i18n,
  newItem,
  setNewItem,
  provided,
  _isEditingItem,
  locked,
}: ItemProps) => {
  const [open, setOpen] = useState(false)
  const [location, setLocation] = useState({ x: 0, y: 0 })
  const [value, setValue] = useState(text)
  const [editMode, setEditMode] = useState(newItem)

  useEffect(() => {
    _isEditingItem!(columnIndex!, itemIndex!, editMode || isDragging!)
  }, [editMode, isDragging])

  useEffect(() => {
    setValue(text)
  }, [text])

  function auto_grow(element: any) {
    element.style.height = '5px'
    element.style.height = element.scrollHeight + 'px'
  }

  return (
    <>
      <ContextMenu
        menu={
          <div onClick={() => setOpen(false)}>
            <button
              onClick={() => {
                setEditMode(true)
              }}
            >
              <Icon icon={'edit'} />
              {i18n!.edit!}
            </button>
            <button
              onClick={() => {
                _deleteItem!(columnIndex!, itemIndex!)
              }}
            >
              <Icon icon={'remove'} />
              {i18n!.remove!}
            </button>
          </div>
        }
        open={open}
        setOpen={setOpen}
        location={location}
        setLocation={setLocation}
        isDisabled={locked}
      >
        <div
          data-testid={'Item'}
          className={locked ? styles.item + ' ' + styles.locked : styles.item}
          style={isDragging ? { border: '2px solid var(--text400)' } : {}}
        >
          <span className={styles.textWrapper}>
            {editMode ? (
              <textarea
                className={styles.input}
                autoFocus
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                  auto_grow(e.target)
                }}
                onBlur={(e) => {
                  setEditMode(false)
                  setNewItem!(false)
                  _editItem!(columnIndex!, itemIndex!, value)
                }}
                onFocus={(e) =>
                  e.currentTarget.setSelectionRange(
                    e.currentTarget.value.length,
                    e.currentTarget.value.length,
                  )
                }
              />
            ) : (
              <span className={styles.text}>{value}</span>
            )}
          </span>

          {locked ? (
            <div className={styles.icon + ' ' + styles.lock}>
              <Icon icon={'lock'} />
            </div>
          ) : (
            <div
              className={styles.icon}
              onClick={(e) => {
                setLocation({ x: e.pageX, y: e.pageY })
                setOpen(true)
              }}
            >
              <Icon icon="itemMenu" />
            </div>
          )}
        </div>
      </ContextMenu>

      {/* <Modal
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        selector="#modal-root"
      >
        <input
          placeholder={'Item'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <Button
          onClick={() => {
            _editItem!(columnIndex!, itemIndex!, value)
          }}
        >
          Save
        </Button>
      </Modal> */}
    </>
  )
}

export default Item
