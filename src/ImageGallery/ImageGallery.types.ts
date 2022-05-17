import { ImageProps } from 'src/Image/Image.types'

export interface ImageGalleryProps {
  children: ImageProps[]
  autoplay?: boolean
  interval?: number
}

export interface ImageGalleryThumbnailProps {
  children: ImageProps[]
}
