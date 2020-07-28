/* External dependencies */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Internal dependencies */
import CommentList from 'components/CommentList'
import * as commentAction from 'redux/reducers/commentReducer'
import * as commentSelector from 'redux/selectors/commentSelector'

function CommentListContainer() {
  const dispatch = useDispatch()
  const comments = useSelector(commentSelector.getComments)

  useEffect(() => {
    dispatch(commentAction.getComments())
  }, [dispatch])

  return <CommentList comments={comments} />
}

export default CommentListContainer
