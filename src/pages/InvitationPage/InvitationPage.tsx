/* External dependencies */
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

/* Internal dependencies */
import InvitationContainer from 'containers/InvitationContainer'

interface RouterProps {
  invitationId: string
}

function InvitationPage({ match }: RouteComponentProps<RouterProps>) {
  const { invitationId } = match.params

  return <InvitationContainer invitationId={invitationId} />
}

export default InvitationPage
