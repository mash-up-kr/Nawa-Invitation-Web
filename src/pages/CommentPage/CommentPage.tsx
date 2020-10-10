/* External dependencies */
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

/* Internal dependencies */
import CommentListContainer from 'containers/CommentListContainer'

interface RouterProps {
  invitationId: string
}

function CommentPage({ match }: RouteComponentProps<RouterProps>) {
  const { invitationId } = match.params

  return <CommentListContainer invitationId={invitationId} />
}

export default CommentPage
