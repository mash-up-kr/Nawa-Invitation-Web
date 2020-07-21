/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import TodoListContainer from 'containers/TodoListContainer'
import styles from './HomePage.module.scss'

const cx = classNames.bind(styles)

function HomePage() {
  return (
    <div className={cx('homepage-wrapper')}>
      <div className={cx('todo-list-wrapper')}>
        <TodoListContainer />
      </div>
    </div>
  )
}

export default HomePage
