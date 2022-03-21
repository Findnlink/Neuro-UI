import React, { useEffect, useState } from 'react'
import { BoardProps } from './Board.types'
//@ts-ignore
import styles from './Board.module.scss'
import Column from '../Column/Column'
import ColumnType from '../Column/Column.types'
import ColumnProps from '../Column/Column.types'
import {
  DragDropContext,
  Draggable,
  DraggableProvidedDraggableProps,
  Droppable,
} from 'react-beautiful-dnd'
import Add from '../Add/Add'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export const Board = ({
  columns,
  setColumns,
  title,
  projectId,
  _id,
  createdAt,
  updatedAt,
  i18n,
  emitter,
  editList,
}: BoardProps) => {
  const [newColumn, setNewColumn] = useState<boolean>(false)

  const onDragEnd = (result: any) => {
    // dropped nowhere
    if (!result.destination) {
      return
    }

    const source = result.source
    const destination = result.destination

    // did not move anywhere
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return
    }

    if (result.type === 'BOARD') {
      // reordering columns
      let ordered: any[] = reorder(columns, source.index, destination.index)
      ordered = setPosition(ordered)
      //console.log('ordered', ordered)
      setColumns((prev: any) => ({ ...prev, columns: ordered }))

      if (emitter)
        emitter.emit('REORDER_COLUMNS', {
          boardId: _id!,
          columns: ordered,
        })
    } else if (result.type === 'COLUMN') {
      // reordering items
      const data = reorderColumns(columns, source, destination)
      setColumns((prev: any) => ({ ...prev, columns: data }))

      let current = [...data[source.droppableId].items]
      let next = [...data[destination.droppableId].items]
      let target = current[source.index]

      // TODO: später reorderItems für optimierung
      if (emitter)
        emitter.emit('REORDER_COLUMNS', {
          boardId: _id!,
          columns: data,
        })
    }
  }

  const reorderColumns = (columns: ColumnProps[], source: any, destination: any): ColumnType[] => {
    //console.log('startIndex ', source, 'EndIndex ', destination)

    const current = [...columns[source.droppableId].items]
    const next = [...columns[destination.droppableId].items]
    const target = current[source.index]

    // moving to same list
    if (source.droppableId === destination.droppableId) {
      const reordered = reorder(current, source.index, destination.index)
      columns[source.droppableId].items = setPosition(reordered)
      return columns
    }

    // moving to different list

    // remove from original
    current.splice(source.index, 1)
    // insert into next
    next.splice(destination.index, 0, target)

    columns[source.droppableId].items = setPosition(current)
    columns[destination.droppableId].items = setPosition(next)

    return columns
  }

  const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const setPosition = (ordered: any[]) => {
    let withPosition = ordered.map((item, index) => {
      item.position = index
      return item
    })
    //console.log('setPosition', withPosition)
    return withPosition
  }

  const _addItem = (columnIndex: number, columnId: string) => {
    columns[columnIndex].items.push({
      text: '',
      position: columns[columnIndex].items.length,
      columnId: columnId,
      _id: Math.random().toString(36).substr(2, 9),
    })
    setColumns((prev: any) => ({ ...prev, columns: columns }))
    if (emitter)
      emitter.emit('ADD_ITEM', { boardId: _id!, columnId: columns[columnIndex]._id, text: '' })
  }

  const _deleteItem = (columnIndex: number, itemIndex: number) => {
    if (emitter)
      emitter.emit('DELETE_ITEM', {
        boardId: _id!,
        columnId: columns[columnIndex]._id,
        itemId: columns[columnIndex].items[itemIndex]._id,
      })

    columns[columnIndex].items.splice(itemIndex, 1)
    setColumns((prev: any) => ({ ...prev, columns: columns }))
  }

  const _editItem = (columnIndex: number, itemIndex: number, text: string) => {
    columns[columnIndex].items[itemIndex].text = text
    setColumns((prev: any) => ({ ...prev, columns: columns }))

    if (emitter)
      emitter.emit('EDIT_ITEM', {
        boardId: _id!,
        columnId: columns[columnIndex]._id,
        itemId: columns[columnIndex].items[itemIndex]._id,
        text: text,
        position: columns[columnIndex].items[itemIndex].position,
      })
  }

  const _addColumn = () => {
    if (emitter)
      emitter.emit('ADD_COLUMN', {
        boardId: _id!,
        title: '',
        color: 'var(--text200)',
      })

    setColumns((prev: any) => ({
      ...prev,
      columns: [
        ...prev.columns,
        {
          title: '',
          position: columns.length,
          color: 'var(--text200)',
          _id: Math.random().toString(36).substr(2, 9),
          items: [],
        },
      ],
    }))
  }

  const _deleteColumn = (columnIndex: number) => {
    if (emitter)
      emitter.emit('DELETE_COLUMN', {
        boardId: _id!,
        columnId: columns[columnIndex]._id,
      })

    columns.splice(columnIndex, 1)
    setColumns((prev: any) => ({ ...prev, columns: columns }))
  }

  const _editColumn = (columnIndex: number, title: string, color: string) => {
    columns[columnIndex].title = title
    columns[columnIndex].color = color
    setColumns((prev: any) => ({ ...prev, columns: columns }))
    if (emitter)
      emitter.emit('EDIT_COLUMN', {
        boardId: _id!,
        columnId: columns[columnIndex]._id,
        title: title,
        color: color,
        position: columns[columnIndex].position,
      })
  }

  const _isEditingItem = (columnIndex: number, itemIndex: number, isEditing: boolean) => {
    if (emitter)
      emitter.emit('IS_EDITING_ITEM', {
        boardId: _id!,
        columnId: columns[columnIndex]._id,
        itemId: columns[columnIndex].items[itemIndex]._id,
        position: columns[columnIndex].items[itemIndex].position,
        isEditing: isEditing,
      })
  }

  const _isEditingColumn = (columnIndex: number, isEditing: boolean) => {
    if (emitter)
      emitter.emit('IS_EDITING_COLUMN', {
        boardId: _id!,
        columnId: columns[columnIndex]._id,
        position: columns[columnIndex].position,
        isEditing: isEditing,
      })
  }

  return (
    <>
      {columns ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className={styles.title}>{title}</div>
          <Droppable droppableId={String(_id)} direction="horizontal" type="BOARD">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className={styles.board}>
                {columns
                  .sort((columnA, columnB) => columnA.position - columnB.position)
                  .map((col: ColumnProps, index: number) => (
                    <Draggable
                      draggableId={String(index)}
                      key={index}
                      index={index}
                      isDragDisabled={editList!.indexOf(col._id as never) !== -1}
                    >
                      {(provided: any, snapshot: any) => (
                        <div ref={provided.innerRef} {...provided.draggableProps}>
                          <Column
                            title={col.title}
                            color={col.color}
                            position={col.position}
                            _id={col._id}
                            createdAt={col.createdAt}
                            updatedAt={col.updatedAt}
                            items={col.items}
                            dragHandleProps={provided.dragHandleProps}
                            i18n={i18n}
                            index={index}
                            _addItem={_addItem}
                            _deleteItem={_deleteItem}
                            _editItem={_editItem}
                            _deleteColumn={_deleteColumn}
                            _editColumn={_editColumn}
                            isDragging={snapshot.isDragging}
                            newColumn={index === columns.length - 1 ? newColumn : false}
                            setNewColumn={setNewColumn}
                            _isEditingColumn={_isEditingColumn}
                            _isEditingItem={_isEditingItem}
                            editList={editList}
                            locked={editList!.indexOf(col._id as never) !== -1}
                          />
                          {provided.placeholder}
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
                <Add
                  isColumn
                  text={i18n?.addNew || 'Add new'}
                  onClick={() => {
                    _addColumn()
                    setNewColumn(true)
                  }}
                />
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <SkeletonTheme baseColor="var(--bg200)" highlightColor="var(--bg300)">
          <Skeleton
            containerClassName={styles.skeletonWrapper}
            className={styles.skeletonText}
            count={1}
          />
          <Skeleton
            containerClassName={styles.skeletonWrapper}
            className={styles.skeleton}
            count={3}
          />
        </SkeletonTheme>
      )}
    </>
  )
}
