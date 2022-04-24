import React from 'react'
import { IconProps } from './Icon.types'
//@ts-ignore
import scss from './Icon.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Icon = ({ icon, color, ...props }: IconProps) => {
  const getClassNames = () => {
    let className = _getClassNames({ parent: scss.icon, scss, ...props })

    return className.join(' ')
  }

  const returnSVG = () => {
    switch (icon) {
      case 'add':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.423"
            height="8.423"
            viewBox="0 0 8.423 8.423"
          >
            <g id="Component_33_1" data-name="Component 33 – 1" transform="translate(1 1)">
              <line
                id="Line_845"
                data-name="Line 845"
                x2="6.423"
                transform="translate(0 3.211)"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeWidth="2"
              />
              <line
                id="Line_846"
                data-name="Line 846"
                x2="6.423"
                transform="translate(3.211) rotate(90)"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        )
      case 'itemMenu':
        return (
          <svg
            id="Component_31"
            data-name="Component 31"
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="13"
            viewBox="0 0 3 13"
          >
            <circle
              id="Ellipse_1201"
              data-name="Ellipse 1201"
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="translate(3) rotate(90)"
              fill="var(--text200)"
            />
            <circle
              id="Ellipse_1202"
              data-name="Ellipse 1202"
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="translate(3 5) rotate(90)"
              fill="var(--text200)"
            />
            <circle
              id="Ellipse_1203"
              data-name="Ellipse 1203"
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="translate(3 10) rotate(90)"
              fill="var(--text200)"
            />
          </svg>
        )
      case 'arrow':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.523"
            height="11.831"
            viewBox="0 0 8.523 11.831"
          >
            <line
              id="Line_867"
              data-name="Line 867"
              x2="3.798"
              y2="4.288"
              transform="translate(2.117 9.714) rotate(-90)"
              fill="none"
              stroke="#a7a8a8"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <line
              id="Line_868"
              data-name="Line 868"
              x1="3.798"
              y2="4.288"
              transform="translate(2.117 5.916) rotate(-90)"
              fill="none"
              stroke="#a7a8a8"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
        )
      case 'cross':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.839"
            height="11.839"
            viewBox="0 0 11.839 11.839"
          >
            <line
              id="Line_869"
              data-name="Line 869"
              y2="10.742"
              transform="translate(9.717 2.122) rotate(45)"
              fill="none"
              stroke="var(--text200)"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <line
              id="Line_870"
              data-name="Line 870"
              y2="10.742"
              transform="translate(9.717 9.717) rotate(135)"
              fill="none"
              stroke="var(--text200)"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
        )

      case 'edit':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.756"
            height="11.756"
            viewBox="0 0 11.756 11.756"
          >
            <path
              id="Icon_material-edit"
              data-name="Icon material-edit"
              d="M4.5,13.8v2.449H6.949L14.171,9.03,11.722,6.581ZM16.065,7.136a.65.65,0,0,0,0-.921L14.537,4.687a.65.65,0,0,0-.921,0l-1.2,1.2L14.87,8.331Z"
              transform="translate(-4.5 -4.496)"
              fill="var(--text200)"
            />
          </svg>
        )

      case 'remove':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.281"
            height="12.281"
            viewBox="0 0 12.281 12.281"
          >
            <path
              id="Icon_material-remove-circle"
              data-name="Icon material-remove-circle"
              d="M9.141,3a6.141,6.141,0,1,0,6.141,6.141A6.143,6.143,0,0,0,9.141,3Zm3.07,6.755H6.07V8.527h6.141Z"
              transform="translate(-3 -3)"
              fill="var(--text200)"
            />
          </svg>
        )

      case 'lock':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.92"
            height="13.623"
            viewBox="0 0 11.92 13.623"
          >
            <path
              id="Icon_awesome-lock"
              data-name="Icon awesome-lock"
              d="M10.643,5.96H10V4.044a4.044,4.044,0,1,0-8.089,0V5.96H1.277A1.277,1.277,0,0,0,0,7.237v5.109a1.277,1.277,0,0,0,1.277,1.277h9.366a1.277,1.277,0,0,0,1.277-1.277V7.237A1.277,1.277,0,0,0,10.643,5.96Zm-2.767,0H4.044V4.044a1.916,1.916,0,0,1,3.831,0Z"
              fill="var(--text200)"
            />
          </svg>
        )
      case 'eye':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="11.927"
            viewBox="0 0 18 11.927"
          >
            <path
              id="Path_1084"
              data-name="Path 1084"
              d="M17.892,69.51A10.029,10.029,0,0,0,9,64,10.031,10.031,0,0,0,.109,69.51a1,1,0,0,0,0,.907A10.029,10.029,0,0,0,9,75.927a10.031,10.031,0,0,0,8.891-5.51,1,1,0,0,0,0-.907ZM9,74.436a4.473,4.473,0,1,1,4.5-4.473A4.486,4.486,0,0,1,9,74.436Zm0-7.454a3,3,0,0,0-.791.118,1.479,1.479,0,0,1-.147,1.932,1.5,1.5,0,0,1-1.944.146,2.966,2.966,0,0,0,1.221,3.25,3.008,3.008,0,0,0,3.489-.11A2.972,2.972,0,0,0,9,66.982Z"
              transform="translate(-0.001 -64)"
              fill="var(--text200)"
            />
          </svg>
        )

      case 'eyeClosed':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.033"
            height="16.027"
            viewBox="0 0 20.033 16.027"
          >
            <path
              id="Path_1085"
              data-name="Path 1085"
              d="M10.018,12.517A4.491,4.491,0,0,1,5.545,8.351L2.261,5.813a10.433,10.433,0,0,0-1.149,1.74,1.013,1.013,0,0,0,0,.914,10.04,10.04,0,0,0,8.906,5.553,9.723,9.723,0,0,0,2.438-.327l-1.624-1.257A4.512,4.512,0,0,1,10.018,12.517Zm9.823,1.819-3.46-2.674a10.369,10.369,0,0,0,2.543-3.195,1.013,1.013,0,0,0,0-.914A10.04,10.04,0,0,0,10.018,2,9.646,9.646,0,0,0,5.407,3.18L1.424.1a.5.5,0,0,0-.7.088L.107.981a.5.5,0,0,0,.088.7L18.612,15.918a.5.5,0,0,0,.7-.088l.615-.791A.5.5,0,0,0,19.841,14.336ZM14.09,9.891,12.86,8.94A2.966,2.966,0,0,0,9.226,5.124a1.492,1.492,0,0,1,.291.883,1.46,1.46,0,0,1-.048.313l-2.3-1.781A4.455,4.455,0,0,1,10.018,3.5,4.5,4.5,0,0,1,14.525,8.01a4.4,4.4,0,0,1-.435,1.882Z"
              transform="translate(-0.001 0.003)"
              fill="var(--text200)"
            />
          </svg>
        )

      case 'copy':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.759"
            height="14.582"
            viewBox="0 0 12.759 14.582"
          >
            <path
              id="Icon_awesome-copy"
              data-name="Icon awesome-copy"
              d="M9.114,12.759V13.9a.684.684,0,0,1-.684.684H.684A.684.684,0,0,1,0,13.9V3.418a.684.684,0,0,1,.684-.684H2.734v8.43a1.6,1.6,0,0,0,1.595,1.595Zm0-9.8V0H4.329a.684.684,0,0,0-.684.684V11.164a.684.684,0,0,0,.684.684h7.747a.684.684,0,0,0,.684-.684V3.646H9.8A.686.686,0,0,1,9.114,2.962Zm3.445-.884L10.681.2A.684.684,0,0,0,10.2,0h-.173V2.734h2.734V2.562a.684.684,0,0,0-.2-.483Z"
              fill="var(--text200)"
            />
          </svg>
        )

      case 'square':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <g
              id="Rectangle_6648"
              data-name="Rectangle 6648"
              fill="none"
              stroke="#a7a8a8"
              strokeWidth="2"
            >
              <rect width="20" height="20" rx="5" stroke="none" />
              <rect x="1" y="1" width="18" height="18" rx="4" fill="none" />
            </g>
          </svg>
        )

      case 'squareLines':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <g id="Component_33_15" data-name="Component 33 – 15" transform="translate(1 1)">
              <path
                id="top"
                data-name="Path 1156"
                d="M1.711-.785h9.336"
                transform="translate(2.621 18.785)"
                fill="none"
                stroke="#a7a8a8"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                id="right"
                data-name="Path 1157"
                d="M0,0H9.336"
                transform="translate(18 4.332) rotate(90)"
                fill="none"
                stroke="#a7a8a8"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                id="bottom"
                data-name="Path 1158"
                d="M1.711-.785h9.336"
                transform="translate(2.621 0.785)"
                fill="none"
                stroke="#a7a8a8"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                id="left"
                data-name="Path 1159"
                d="M0,0H9.336"
                transform="translate(0 4.332) rotate(90)"
                fill="none"
                stroke="#a7a8a8"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        )
      default:
        return <svg></svg>
    }
  }

  return (
    <div {...props} className={getClassNames()}>
      {returnSVG()}
    </div>
  )
}
