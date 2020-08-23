/* External dependencies */
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

/* Internal dependencies */
import Preview from 'components/Preview'

interface RouteProps {
  templateId: string
}

function PreviewPage({ match }: RouteComponentProps<RouteProps>) {
  const { templateId } = match.params

  return <Preview templateId={templateId} />
}

export default PreviewPage
