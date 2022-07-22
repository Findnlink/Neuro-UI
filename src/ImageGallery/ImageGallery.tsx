import React, { useEffect, useState, useRef } from 'react'
import { ImageGalleryProps, ImageGalleryThumbnailProps } from './ImageGallery.types'
//@ts-ignore
import scss from './ImageGallery.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { Icon } from '../'

export const ImageGallery = ({
  children,
  autoplay,
  interval,
  showPaginate,
  showThumbnail,
  imageObjectFit,
  ...props
}: ImageGalleryProps) => {
  const getClassNames = () => {
    let className = _getClassNames({
      parent: scss.imageGallery,
      scss,
      ...props
    })

    return className.join(' ')
  }

  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, children.length, page)

  // autoplay
  useEffect(() => {
    const _interval = setInterval(() => {
      autoplay && paginate(1)
    }, interval)

    return () => {
      clearInterval(_interval)
    }
  }, [paginate])

  return (
    <div
      data-testid={'ImageGallery'}
      data-imageobjectfit={imageObjectFit}
      className={getClassNames()}
      {...props}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={spring}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          {...children[imageIndex].props}
        />
      </AnimatePresence>
      <Icon _class={scss.next} onClick={() => paginate(1)} icon="arrow" />
      <Icon _class={scss.prev} onClick={() => paginate(-1)} icon="arrow" />
      {showPaginate && (
        <div className={scss.paginateContainer}>
          {children.map((item: any, index: number) => (
            <motion.div key={index}>
              {index === imageIndex ? (
                <motion.div
                  className={scss.paginate + ' ' + scss.overlay}
                  transition={spring}
                  layoutId={'imageGalleryId'}
                  animate={{ opacity: 1 }}
                />
              ) : null}

              <motion.div
                onClick={() => {
                  setPage([index, index < imageIndex ? -1 : 1])
                }}
                animate={index === imageIndex ? { opacity: 0 } : { opacity: 0.8 }}
                transition={{ duration: 0.2 }}
                className={scss.paginate}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      )}
      {showThumbnail && (
        <div className={scss.thumbnailContainer}>
          {children.map((item: any, index: number) => (
            <motion.img
              key={index}
              onClick={() => {
                setPage([index, index < imageIndex ? -1 : 1])
              }}
              src={item.props.src}
              animate={index === imageIndex ? { opacity: 1 } : { opacity: 0.5 }}
              transition={{ duration: 0.2 }}
              className={scss.thumbnail}
            ></motion.img>
          ))}
        </div>
      )}
    </div>
  )
}

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 30
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export const ImageGalleryThumbnail = ({ children, ...props }: ImageGalleryThumbnailProps) => {}
