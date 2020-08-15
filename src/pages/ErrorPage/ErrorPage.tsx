/* External dependencies */
import React from 'react'

/* Internal dependencies */
import Error from 'components/Error'
import ErrorCodes from 'types/ErrorCodes'

function ErrorPage() {
  return <Error errorStatusCode={ErrorCodes.NOT_FOUND} />
}

export default ErrorPage
