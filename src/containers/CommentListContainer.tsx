/* External dependencies */
import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'

/* Internal dependencies */
import CommentList from 'components/CommentList'
import * as commentAction from 'modules/reducers/commentReducer'
import * as commentSelector from 'modules/selectors/commentSelector'

interface CommentListContainerProps {
  invitationId: string
}

function CommentListContainer({ invitationId }: CommentListContainerProps) {
  const dispatch = useDispatch()
  const history = useHistory()
  const comments = useSelector(commentSelector.getComments)
  const mainImage = useSelector(commentSelector.getMainImage)
  const contents = useSelector(commentSelector.getContents)

  const fetchComments = useCallback(async () => {
    try {
      await dispatch(commentAction.getComments({ invitationId })).promise
    } catch (error) {
      const errorStatusCode = _.get(error, ['response', 'status'])
      history.replace(history.location.pathname, { errorStatusCode })
    }
  }, [dispatch, invitationId, history])

  const createComment = useCallback(
    async form => {
      try {
        const { userName, content } = form
        await dispatch(commentAction.createComment({ invitationId, userName, content })).promise
        await dispatch(commentAction.getComments({ invitationId })).promise
      } catch (error) {
        console.log(error)
      }
    },
    [dispatch, invitationId],
  )

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  return (
    <CommentList
      invitationId={invitationId}
      comments={comments}
      mainImage={mainImage}
      contents={contents}
      createComment={createComment}
    />
  )
}

export default CommentListContainer
