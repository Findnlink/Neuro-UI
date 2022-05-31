import { ImageProps } from '../Image/Image.types'

export interface ImageGalleryProps {
  children: ImageProps[]
  autoplay?: boolean
  interval?: number
  showPaginate?: boolean
  showThumbnail?: boolean
  imageObjectFit?: 'fill' | 'contain' | 'cover' | 'scale-down'
}

export interface ImageGalleryThumbnailProps {
  children: ImageProps[]
}
