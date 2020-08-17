/* External dependencies */
import React from 'react'
import Lottie from 'react-lottie'
import classNames from 'classnames/bind'

/* Internal dependencies */
import animationData from 'assets/invitation.json'
import useDuration from 'hooks/useDuration'
import styled from './PopAnimation.module.scss'

const cx = classNames.bind(styled)

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
  return (
    <div className={cx('pop-animation')}>
      <Lottie options={defaultOptions} />
    </div>
  )
}

export default PopAnimation
