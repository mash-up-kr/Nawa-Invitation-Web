/* External dependencies */
import React from 'react'
import { OrderedMap } from 'immutable'
import classNames from 'classnames/bind'

/* Internal dependencies */
import Comment from 'components/Comment'
import CommentModel from 'models/Comment'
import styles from './CommentList.module.scss'

interface commentListProps {
  comments: OrderedMap<number, CommentModel>
}

const cx = classNames.bind(styles)

function CommentList({ comments }: commentListProps) {
  return (
    <div className={cx('comment-list')}>
      <ul className={cx('comments')}>
        {comments.toList().map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  )
}

export default React.memo(CommentList)
