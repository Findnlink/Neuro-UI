import React, { useState as useStateMock } from 'react'
import { render } from '@testing-library/react'
import _data from '../data.json'
import { Board } from './Board'
import { BoardProps } from './Board.types'
import { mount } from 'enzyme'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

describe('Board Component', () => {
  const setData = jest.fn()
  const setEditList = jest.fn()

  beforeEach(() => {
    ;(useStateMock as jest.Mock).mockImplementation((init) => [_data[0], setData])
  })
  beforeEach(() => {
    ;(useStateMock as jest.Mock).mockImplementation((init) => [[init], setEditList])
  })

  const renderComponent = ({
    _id,
    columns,
    setColumns,
    title,
    projectId,
    createdAt,
    updatedAt,
    i18n,
    editList,
  }) =>
    render(
      <Board
        _id={_id}
        columns={columns}
        setColumns={setColumns}
        title={title}
        projectId={projectId}
        createdAt={createdAt}
        updatedAt={updatedAt}
        i18n={i18n}
        editList={editList}
      />,
    )

  it('should add a new item inside column', () => {
    const { getByTestId } = renderComponent({
      _id: _data[0]._id,
      columns: _data[0].columns,
      setColumns: setData,
      title: _data[0].title,
      projectId: _data[0].projectId,
      createdAt: _data[0].createdAt,
      updatedAt: _data[0].updatedAt,
      i18n: { addNew: 'Add new', remove: 'Remove', edit: 'Edit' },
      editList: [],
    })
    //console.log(getByTestId('add'), getByTestId('Column'), 'yee')
  })

  // it('should add a new item inside column', () => {
  //   const { getByTestId } = renderComponent({})
  // })
})
