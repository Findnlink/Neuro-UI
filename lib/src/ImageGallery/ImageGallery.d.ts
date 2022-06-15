/// <reference types="react" />
import { ImageGalleryProps, ImageGalleryThumbnailProps } from './ImageGallery.types';
export declare const ImageGallery: ({ children, autoplay, interval, showPaginate, showThumbnail, imageObjectFit, ...props }: ImageGalleryProps) => JSX.Element;
export declare const ImageGalleryThumbnail: ({ children, ...props }: ImageGalleryThumbnailProps) => void;
