/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import CommentModel from 'models/Comment'
import styles from './Comment.module.scss'

interface CommentProps {
  comment: CommentModel
}

const cx = classNames.bind(styles)

function Comment({ comment }: CommentProps) {
  return (
    <li className={cx('comment')}>
      <p>{comment.get('nickname')}</p>
      <p>{comment.get('content')}</p>
    </li>
  )
}

export default Comment
