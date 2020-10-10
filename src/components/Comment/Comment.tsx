/* External dependencies */
import React, { useCallback } from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import CommentModel from 'models/Comment'
import styles from './Comment.module.scss'
import { getYear, getDate, getTime } from 'utils/dateUtils'

interface CommentProps {
  comment: CommentModel
}

const cx = classNames.bind(styles)

function Comment({ comment }: CommentProps) {
  const getCreateAt = useCallback(() => {
    const createAt = new Date(comment.get('createdAt'))
    return `${getYear(createAt)} ${getDate(createAt)} ${getTime(createAt)}`
  }, [comment])

  return (
    <li className={cx('comment-wrapper')}>
      <div className={cx('comment-title')}>
        <p className={cx('user-name')}>{comment.get('userName')}</p>
        <p className={cx('created-at')}>{getCreateAt()}</p>
      </div>
      <div className={cx('comment-content')}>{comment.get('content')}</div>
    </li>
  )
}

export default React.memo(Comment)
