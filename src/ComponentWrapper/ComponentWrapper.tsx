import React, { useEffect, useRef, useState } from 'react'
import { ComponentWrapperProps } from './ComponentWrapper.types'
import scss from './ComponentWrapper.module.scss'
import { Button, ButtonGroup, Text, Code, Input } from '..'

// Note: Documentation ComponentWrapper will extend the child component with interactive props and code

export function ComponentWrapper({ children, options, ...props }: ComponentWrapperProps) {
  const [newProps, setNewProps] = useState(props)
  const [codeText, setCodeText] = useState('')
  const [newChildren, setNewChildren] = useState<any>(null)

  const addPropsToChildren = (children: any, props: any) => {
    const addPropsToChild = (child: any, props: any) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, props)
      } else {
        console.log('ComponentWrapper: Invalid element: ', child)
        return child
      }
    }
    if (Array.isArray(children)) {
      return children.map((child, ix) => addPropsToChild(child, { key: ix, ...props }))
    } else {
      return addPropsToChild(children, props)
    }
  }

  // Set default props from options
  useEffect(() => {
    let _newProps: any = {}

    // Write options to props only once
    if (newChildren === null) {
      let _props = options.map((option: any, i) => ({ [option.name]: option.default }))
      for (let index = 0; index < _props.length; index++) {
        Object.assign(_newProps, _props[index])
      }
    }

    setNewProps((prev: any) => ({ ...prev, ..._newProps }))
  }, [options])

  // Add props to newChildren
  useEffect(() => {
    setNewChildren(
      addPropsToChildren(children, {
        ...newProps
      })
    )
  }, [newProps])

  // setCodeText with props e.g.: <Button disabled />
  useEffect(() => {
    if (newChildren) {
      let text = `<div>import { ${newChildren.props.mdxType} } from "neuro-ui"</div><div><br></div>`
      let propText = ''

      const arr = Object.entries(newChildren.props)

      // Map throug all props from child component
      arr.map((value: any, key: number) => {
        let _propText = ''
        let [propName, propValue] = value

        if (propValue === '' || propValue === false) return
        if (propName === 'children') return
        if (propName === 'mdxType' || propName === 'originalType') return

        // Add props to _propText
        if (propValue === true) {
          _propText = propName
        } else if (typeof propValue === 'object') {
          _propText = propName + '={' + JSON.stringify(propValue) + '}'
        } else if (typeof propValue === 'number') {
          _propText = propName + '={' + propValue + '}'
        } else {
          _propText = propName + '={"' + propValue + '"}'
        }

        _propText = '<div> ' + _propText + '</div>'

        // Remove default values so e.g margin={"m"} will not be shown inside codeText
        options.forEach((option: any) => {
          if (option.name === propName && option.default === propValue) {
            _propText = ''
            return
          }
        })

        propText += _propText

        return value
      })

      if (newChildren.props.children) {
        text += `&lt;${newChildren.props.mdxType}${propText}&gt;${newChildren.props.children}&lt;/${newChildren.props.mdxType}&gt;`
      } else {
        text += `&lt;${newChildren.props.mdxType}${propText}/&gt;`
      }

      setCodeText(text)
    }
  }, [newChildren])

  const showProps = () => {
    return options.map((option: any, key: number) => {
      switch (option.type) {
        // Change to checkbox or switch
        case 'bool':
          return (
            <div key={key} className={scss.wrapper}>
              <Text>{option.name}</Text>
              <Button
                onClick={() =>
                  setNewProps((prev: any) => ({
                    ...prev,
                    [option.name]: !prev[option.name]
                  }))
                }
              >
                {option.name}
              </Button>
            </div>
          )

        case 'array':
          return (
            <div key={key} className={scss.wrapper}>
              <Text>{option.name}</Text>
              <ButtonGroup
                selected={newChildren.props[option.name]}
                setSelected={(value: any) => {
                  setNewProps((prev) => ({
                    ...prev,
                    [option.name]: value
                  }))
                }}
                defaultValue={option.default}
                buttons={option.values}
              />
            </div>
          )

        case 'string':
          return (
            <div key={key} className={scss.wrapper}>
              <Text>{option.name}</Text>
              <Input
                value={newChildren.props[option.name]}
                onChange={(e) =>
                  setNewProps((prev) => ({
                    ...prev,
                    [option.name]: e.target.value
                  }))
                }
                placeholder={option.name}
              />
            </div>
          )

        default:
          break
      }
    })
  }

  return (
    <div className={scss.componentWrapper}>
      <div className={scss.component}>{newChildren && newChildren}</div>
      <div className={scss.props}>{newChildren && showProps()}</div>
      <div className={scss.code}>{codeText && <Code>{codeText.toString()}</Code>}</div>
    </div>
  )
}
