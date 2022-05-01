import React, { useState } from 'react'
import { InputProps } from './Input.types'
//@ts-ignore
import scss from './Input.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { Icon } from '../Icon/Icon'
import { ErrorMessage, Flex, Grid } from '../'

export const Input = ({
  error,
  errorMessage,
  type,
  scale,
  icon,
  limit,
  value,
  onChange,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.input,
      scss,
      scale,
      error,
      ...props
    })

    if (icon) className.push(scss.icon)
    if (type === 'password') className.push(scss.password)

    //console.log('weight', weight, className)

    return className.join(' ')
  }

  return (
    // <div className={getClassNames()}>
    //   <div>
    //     {icon && icon}
    //     {type === 'password' && <Icon padding={'0'} scale={scale} icon="lock" />}
    //     <input
    //       type={type === 'password' && showPassword ? 'text' : type}
    //       data-testid={'Input'}
    //       value={value}
    //       onChange={onChange}
    //       {...props}
    //     />
    //     {type === 'password' && (
    //       <span
    //         className={scss.password}
    //         onClick={() => {
    //           setShowPassword((prev) => !prev)
    //         }}
    //       >
    //         {showPassword ? (
    //           <Icon padding={'0'} icon={'eyeClosed'} scale={scale} />
    //         ) : (
    //           <Icon padding={'0'} icon={'eye'} scale={scale} />
    //         )}
    //       </span>
    //     )}
    //     {limit && (
    //       <span className={scss.limit}>
    //         {value.length}/{props.maxLength}
    //       </span>
    //     )}
    //   </div>
    //   {error && errorMessage && <span className={scss.errorMessage}>{errorMessage}</span>}
    // </div>
    <div className={getClassNames()}>
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        data-testid={'Input'}
        value={value}
        onChange={onChange}
        {...props}
      />
      {icon && (
        <div className={scss.iconWrapper}>
          <Icon margin="m l" icon={'edit'} />
        </div>
      )}
      {type === 'password' && (
        <>
          <div className={scss.iconWrapper}>
            <Icon margin="m l" icon={'lock'} />
          </div>
          <div
            className={scss.passwordWrapper}
            onClick={() => {
              setShowPassword((prev) => !prev)
            }}
          >
            {showPassword ? (
              <Icon margin="m l" icon={'eyeClosed'} />
            ) : (
              <Icon margin="m l" icon={'eye'} />
            )}
          </div>
        </>
      )}

      {/* <ErrorMessage isVisible={error}>{errorMessage}</ErrorMessage> */}
    </div>
  )
}
