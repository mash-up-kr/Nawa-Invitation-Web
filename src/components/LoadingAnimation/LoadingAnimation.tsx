/* External dependencies */
import React from 'react'
import Lottie from 'react-lottie'
import classNames from 'classnames/bind'

/* Internal dependencies */
import animationData from 'assets/invitation.json'
import styled from './LoadingAnimation.module.scss'

const cx = classNames.bind(styled)

function LoadingAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className={cx('loading-animation')}>
      <Lottie options={defaultOptions} />
    </div>
  )
}

export default LoadingAnimation
