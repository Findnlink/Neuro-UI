import React, { useEffect, useState } from 'react'
import { HeaderProps } from './Header.types'
//@ts-ignore
import styles from './Header.module.scss'
import { Icon } from '../../Icon/Icon'
import { ContextMenu } from '../../ContextMenu/ContextMenu'

const Header = ({
  text,
  color,
  itemCount,
  dragHandleProps,
  _deleteColumn,
  _editColumn,
  columnIndex,
  isDragging,
  i18n,
  newColumn,
  setNewColumn,
  locked,
  _isEditingColumn,
}: HeaderProps) => {
  const [open, setOpen] = useState(false)
  const [location, setLocation] = useState({ x: 0, y: 0 })
  const [value, setValue] = useState(text)
  const [editMode, setEditMode] = useState(newColumn)

  useEffect(() => {
    _isEditingColumn!(columnIndex!, editMode || isDragging!)
  }, [editMode, isDragging])

  useEffect(() => {
    setValue(text)
  }, [text])

  return (
    <ContextMenu
      menu={
        <div onClick={() => setOpen(false)}>
          <div>
            <span
              onClick={() => _editColumn!(columnIndex, value, 'var(--text200)')}
              style={{ backgroundColor: 'var(--text200)' }}
            />
            <span
              onClick={() => _editColumn!(columnIndex, value, '#796AFF')}
              style={{ backgroundColor: '#796AFF' }}
            />
            <span
              onClick={() => _editColumn!(columnIndex, value, '#FF6A6A')}
              style={{ backgroundColor: '#FF6A6A' }}
            />
            <span
              onClick={() => _editColumn!(columnIndex, value, '#FC762A')}
              style={{ backgroundColor: '#FC762A' }}
            />
            <span
              onClick={() => _editColumn!(columnIndex, value, '#FFAD1F')}
              style={{ backgroundColor: '#FFAD1F' }}
            />
            <span
              onClick={() => _editColumn!(columnIndex, value, '#17BF63')}
              style={{ backgroundColor: '#17BF63' }}
            />
          </div>
          <hr />
          <button onClick={() => setEditMode(true)}>
            <Icon icon={'edit'} /> {i18n!.edit!}
          </button>
          <button
            onClick={() => {
              _deleteColumn!(columnIndex!)
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
        {...dragHandleProps}
        data-testid={'Header'}
        className={locked ? styles.header + ' ' + styles.locked : styles.header}
        style={isDragging ? { border: '2px solid var(--text400)', color } : { color }}
      >
        <div className={styles.textWrapper}>
          <span className={styles.itemCount}>{itemCount}</span>
          {editMode ? (
            <input
              className={styles.input}
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
              }}
              onBlur={(e) => {
                setEditMode(false)
                setNewColumn(false)
                _editColumn!(columnIndex!, value, color)
              }}
              style={{ color: color }}
              maxLength={28}
            />
          ) : (
            <span>{text}</span>
          )}
        </div>

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
  )
}

export default Header
