/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import style from 'pages/HomePage/HomePage.module.scss'
import Home from 'components/Home/Home'

const cx = classNames.bind(style)

function HomePage() {
  return (
    <div className={cx('homepage-wrapper')}>
      <Home />
    </div>
  )
}

export default HomePage
