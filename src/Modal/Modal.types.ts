export interface ModalProps {
  children: any
  open: boolean
  onClose: () => void
  type?: string
  onConfirm?: () => void
  i18n?: { yes: string; no: string }
}
