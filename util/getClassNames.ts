import { UtilInterface, _getClassNamesProps } from './interfaces'

export const _getClassNames = ({
  parent,
  scss,
  _class,
  primary,
  disabled,
  loading,
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

  _className.filter(Boolean)

  return _className
}
