/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
//import CommentListContainer from 'containers/CommentListContainer'
import PopAnimation from 'components/PopAnimation'
import InvitationContainer from 'containers/InvitationContainer'
import styles from './HomePage.module.scss'

const cx = classNames.bind(styles)

function HomePage() {
  return (
    <div className={cx('homepage-wrapper')}>
      <div className={cx('main-wrapper')}>
        <PopAnimation duration={1.5} />
        <InvitationContainer />
        //<CommentListContainer />
      </div>
    </div>
  )
}

export default HomePage
