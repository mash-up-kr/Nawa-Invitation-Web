/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import Template from 'components/Template'
import styles from './HomePage.module.scss'

const cx = classNames.bind(styles)

function HomePage() {
  return (
    <div className={cx('homepage-wrapper')}>
      <div className={cx('todo-list-wrapper')}>
        <Template
          title="모각코하러 모이자!"
          description="나의모임에 초대된 감자 친구들! 우리는 엄청난 서비스를 만들 수 있을꺼야!"
          date="11월 27일"
          time="오후 12시"
          simpleLocation="잠실 1동"
        />
      </div>
    </div>
  )
}

export default HomePage
