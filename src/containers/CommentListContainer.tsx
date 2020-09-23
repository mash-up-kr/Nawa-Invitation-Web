/* External dependencies */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Internal dependencies */
import CommentList from 'components/CommentList'
import * as commentAction from 'modules/reducers/commentReducer'
import * as commentSelector from 'modules/selectors/commentSelector'

function CommentListContainer() {
  const dispatch = useDispatch()
  const comments = useSelector(commentSelector.getComments)

  useEffect(() => {
    dispatch(commentAction.getComments())
  }, [dispatch])

  return <CommentList comments={comments} />
}

export default CommentListContainer
