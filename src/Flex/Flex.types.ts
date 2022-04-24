export interface FlexProps {
  children?: any
  className?: string
  container?: boolean
  /****** Container Props ********/
  flexDirection?: 'row' | 'column'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'initial'
    | 'inherit'
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit'
  /****** Child Props ********/
  flexGrow?: number
  flexShrink?: number
  flexBasis?: number
  flex?: string
  /****** Common Layout Props ********/
  padding?: string
  margin?: string
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
}
