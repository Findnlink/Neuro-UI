import { UtilInterface, _getClassNamesProps } from './interfaces'

export const _getClassNames = ({
  parent,
  scss,
  _class,
  primary,
  disabled,
  loading,
  error,
  scale,
  weight,
  margin,
  padding
}: _getClassNamesProps) => {
  let _className = [parent]

  if (_class) _className.push(_class)
  if (primary) _className.push(scss.primary)
  if (disabled) _className.push(scss.disabled)
  if (loading) _className.push(scss.loading)
  if (error) _className.push(scss.error)

  switch (scale) {
    case 's':
      _className.push(scss.fontS)
      break
    case 'm':
      _className.push(scss.fontM)
      break
    case 'l':
      _className.push(scss.fontL)
      break
    case 'xl':
      _className.push(scss.fontXL)
      break
  }

  switch (weight) {
    case 'light':
      _className.push(scss.weightLight)
      break
    case 'normal':
      _className.push(scss.weightNormal)
      break
    case 'bold':
      _className.push(scss.weightBold)
      break
  }

  switch (margin) {
    case '0':
      _className.push(scss.margin0)
      break
    case 's':
      _className.push(scss.marginS)
      break
    case 'm':
      _className.push(scss.marginM)
      break
    case 'l':
      _className.push(scss.marginL)
      break
    case 'xl':
      _className.push(scss.marginXL)
      break
  }

  if (margin) {
    const marginArr = margin.split(' ')

    // e.g. margin: m
    if (marginArr.length === 1) {
      switch (margin) {
        case '0':
          _className.push(scss.margin0)
          break
        case 's':
          _className.push(scss.marginS)
          break
        case 'm':
          _className.push(scss.marginM)
          break
        case 'l':
          _className.push(scss.marginL)
          break
        case 'xl':
          _className.push(scss.marginXL)
          break
      }
    }
    // e.g. margin: s m
    else if (marginArr.length === 2) {
      // Top and bottom
      switch (marginArr[0]) {
        case '0':
          _className.push(scss.marginTop0)
          _className.push(scss.marginBottom0)
          break
        case 's':
          _className.push(scss.marginTopS)
          _className.push(scss.marginBottomS)
          break
        case 'm':
          _className.push(scss.marginTopM)
          _className.push(scss.marginBottomM)
          break
        case 'l':
          _className.push(scss.marginTopL)
          _className.push(scss.marginBottomL)
          break
        case 'xl':
          _className.push(scss.marginTopXL)
          _className.push(scss.marginBottomXL)
          break
      }

      // Left and right
      switch (marginArr[1]) {
        case '0':
          _className.push(scss.marginLeft0)
          _className.push(scss.marginRight0)
          break
        case 's':
          _className.push(scss.marginLeftS)
          _className.push(scss.marginRightS)
          break
        case 'm':
          _className.push(scss.marginLeftM)
          _className.push(scss.marginRightM)
          break
        case 'l':
          _className.push(scss.marginLeftL)
          _className.push(scss.marginRightL)
          break
        case 'xl':
          _className.push(scss.marginLeftXL)
          _className.push(scss.marginRightXL)
          break
      }
    }
    // e.g. padding: 0 m l m
    else if (marginArr.length === 4) {
      // Top
      switch (marginArr[0]) {
        case '0':
          _className.push(scss.marginTop0)
          break
        case 's':
          _className.push(scss.marginTopS)
          break
        case 'm':
          _className.push(scss.marginTopM)
          break
        case 'l':
          _className.push(scss.marginTopL)
          break
        case 'xl':
          _className.push(scss.marginTopXL)
          break
      }

      // Right
      switch (marginArr[1]) {
        case '0':
          _className.push(scss.marginRight0)
          break
        case 's':
          _className.push(scss.marginRightS)
          break
        case 'm':
          _className.push(scss.marginRightM)
          break
        case 'l':
          _className.push(scss.margingRightL)
          break
        case 'xl':
          _className.push(scss.marginRightXL)
          break
      }

      // Bottom
      switch (marginArr[2]) {
        case '0':
          _className.push(scss.marginBottom0)
          break
        case 's':
          _className.push(scss.marginBottomS)
          break
        case 'm':
          _className.push(scss.marginBottomM)
          break
        case 'l':
          _className.push(scss.marginBottomL)
          break
        case 'xl':
          _className.push(scss.marginBottomXL)
          break
      }

      // Left
      switch (marginArr[3]) {
        case '0':
          _className.push(scss.marginLeft0)
          break
        case 's':
          _className.push(scss.marginLeftS)
          break
        case 'm':
          _className.push(scss.marginLeftM)
          break
        case 'l':
          _className.push(scss.marginLeftL)
          break
        case 'xl':
          _className.push(scss.marginLeftXL)
          break
      }
    }
  }

  if (padding) {
    const paddingArr = padding.split(' ')

    // e.g. padding: m
    if (paddingArr.length === 1) {
      switch (padding) {
        case '0':
          _className.push(scss.padding0)
          break
        case 's':
          _className.push(scss.paddingS)
          break
        case 'm':
          _className.push(scss.paddingM)
          break
        case 'l':
          _className.push(scss.paddingL)
          break
        case 'xl':
          _className.push(scss.paddingXL)
          break
      }
    }
    // e.g. padding: s m
    else if (paddingArr.length === 2) {
      // Top and bottom
      switch (paddingArr[0]) {
        case '0':
          _className.push(scss.paddingTop0)
          _className.push(scss.paddingBottom0)
          break
        case 's':
          _className.push(scss.paddingTopS)
          _className.push(scss.paddingBottomS)
          break
        case 'm':
          _className.push(scss.paddingTopM)
          _className.push(scss.paddingBottomM)
          break
        case 'l':
          _className.push(scss.paddingTopL)
          _className.push(scss.paddingBottomL)
          break
        case 'xl':
          _className.push(scss.paddingTopXL)
          _className.push(scss.paddingBottomXL)
          break
      }

      // Left and right
      switch (paddingArr[1]) {
        case '0':
          _className.push(scss.paddingLeft0)
          _className.push(scss.paddingRight0)
          break
        case 's':
          _className.push(scss.paddingLeftS)
          _className.push(scss.paddingRightS)
          break
        case 'm':
          _className.push(scss.paddingLeftM)
          _className.push(scss.paddingRightM)
          break
        case 'l':
          _className.push(scss.paddingLeftL)
          _className.push(scss.paddingRightL)
          break
        case 'xl':
          _className.push(scss.paddingLeftXL)
          _className.push(scss.paddingRightXL)
          break
      }
    }
    // e.g. padding: 0 m l m
    else if (paddingArr.length === 4) {
      // Top
      switch (paddingArr[0]) {
        case '0':
          _className.push(scss.paddingTop0)
          break
        case 's':
          _className.push(scss.paddingTopS)
          break
        case 'm':
          _className.push(scss.paddingTopM)
          break
        case 'l':
          _className.push(scss.paddingTopL)
          break
        case 'xl':
          _className.push(scss.paddingTopXL)
          break
      }

      // Right
      switch (paddingArr[1]) {
        case '0':
          _className.push(scss.paddingRight0)
          break
        case 's':
          _className.push(scss.paddingRightS)
          break
        case 'm':
          _className.push(scss.paddingRightM)
          break
        case 'l':
          _className.push(scss.paddingRightL)
          break
        case 'xl':
          _className.push(scss.paddingRightXL)
          break
      }

      // Bottom
      switch (paddingArr[2]) {
        case '0':
          _className.push(scss.paddingBottom0)
          break
        case 's':
          _className.push(scss.paddingBottomS)
          break
        case 'm':
          _className.push(scss.paddingBottomM)
          break
        case 'l':
          _className.push(scss.paddingBottomL)
          break
        case 'xl':
          _className.push(scss.paddingBottomXL)
          break
      }

      // Left
      switch (paddingArr[3]) {
        case '0':
          _className.push(scss.paddingLeft0)
          break
        case 's':
          _className.push(scss.paddingLeftS)
          break
        case 'm':
          _className.push(scss.paddingLeftM)
          break
        case 'l':
          _className.push(scss.paddingLeftL)
          break
        case 'xl':
          _className.push(scss.paddingLeftXL)
          break
      }
    }
  }

  _className.filter(Boolean)

  return _className
}
