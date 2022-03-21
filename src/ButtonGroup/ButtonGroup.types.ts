export interface ButtonGroupProps {
  value: string
  buttons: string[]
  setValue: any
  disabled?: boolean
  /** Size of the button */
  scale?: 's' | 'm' | 'l' | 'xl'
  weight?: 'light' | 'normal' | 'bold'
}
