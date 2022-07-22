import { UtilInterface } from '../../util/interfaces';
import { ImageProps } from '../Image/Image.types';
export interface ImageGalleryProps extends UtilInterface {
    children: any;
    autoplay?: boolean;
    interval?: number;
    showPaginate?: boolean;
    showThumbnail?: boolean;
    imageObjectFit?: 'fill' | 'contain' | 'cover' | 'scale-down';
}
export interface ImageGalleryThumbnailProps {
    children: ImageProps[];
}
