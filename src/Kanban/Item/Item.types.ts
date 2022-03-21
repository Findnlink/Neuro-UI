import React from 'react'

export default interface ItemProps {
  text: string
  position: number
  _id: string
  columnId: string
  createdAt?: string
  updatedAt?: string
  isDragging?: boolean
  columnIndex?: number
  itemIndex?: number
  _deleteItem?: (columnIndex: number, itemIndex: number) => void
  _editItem?: (columnIndex: number, itemIndex: number, text: string) => void
  i18n?: { addNew: string; remove: string; edit: string }
  newItem?: boolean
  setNewItem?: React.Dispatch<React.SetStateAction<boolean>>
  provided?: any,
  _isEditingItem?: (columnIndex: number, itemIndex: number, isEditing: boolean) => void,
  locked?: boolean
}
