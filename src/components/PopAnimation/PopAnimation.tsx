import React from 'react'
import Lottie from 'react-lottie'

import animationData from 'assets/fireworks.json'
import useDuration from 'hooks/useDuration'

function PopAnimation({ duration }) {
  const show = useDuration(duration)

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  if (!show) return null
  return <Lottie options={defaultOptions} height={600} width={500} />
}

export default PopAnimation
