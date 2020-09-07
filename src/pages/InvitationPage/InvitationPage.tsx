/* External dependencies */
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

/* Internal dependencies */
import InvitationContainer from 'containers/InvitationContainer'

interface RouterProps {
  invitationId: string
}

function InvitationPage({ match }: RouteComponentProps<RouterProps>) {
  const { invitationId } = match.params

  return (
    <>
      <Helmet>
        <title>Invitation</title>
        <meta name="description" content="Nawa invitation" />
      </Helmet>
      <div>
        <InvitationContainer invitationId={invitationId} />
      </div>
    </>
  )
}

export default InvitationPage
