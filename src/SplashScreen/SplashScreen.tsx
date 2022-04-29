import React, { useState, useEffect } from 'react'
import { SplashScreenProps } from './SplashScreen.types'
//@ts-ignore
import scss from './SplashScreen.module.scss'
import { _getClassNames } from '../../util/getClassNames'
//@ts-ignore
// import Lottie from 'react-lottie-player'
// import * as _animationDarkData from '../../assets/logoAnimationDark.json'
// import * as _animationLightData from '../../assets/logoAnimationLight.json'
import { motion } from 'framer-motion'
import { useStore } from '../store'

export const SplashScreen = ({ ...props }: SplashScreenProps) => {
  const [theme, isLoading, setIsLoading] = useStore((s) => [s.theme, s.isLoading, s.setIsLoading])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 1600)

    return () => {
      clearTimeout(timeout)
      setIsLoading(false)
    }
  }, [])

  return (
    <div
      data-testid={'SplashScreen'}
      className={scss.splashScreen}
      data-isloading={isLoading}
      onClick={() => setIsLoading(false)}
    >
      <motion.div
        animate={{
          scale: [1.2, 1.5, 0.8, 0]
        }}
        transition={spring}
      >
        {/* <Lottie
          animationData={theme === 'dark' ? _animationDarkData : _animationLightData}
          play
          speed={1.2}
          style={{ width: 300, height: 300 }}
        /> */}
      </motion.div>
    </div>
  )
}

const spring = {
  type: 'spring',
  stiffness: 10700,
  damping: 0,
  duration: 3
}
