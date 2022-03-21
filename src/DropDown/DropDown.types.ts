export interface DropDownItemProps {
  children: any
  disabled?: boolean
  selected?: number
  index?: number
}

export interface DropDownProps {
  items: DropDownItemProps[]
  selected: number
  setSelected: any
  placeholder: string
}
