/* External dependencies */
import React from 'react'
import { useLocation } from 'react-router-dom'
import _ from 'lodash'

/* Internal dependencies */
import Error from 'components/Error'

function ErrorHandler({ children }) {
  const location = useLocation()
  const errorStatusCode = _.get(location, ['state', 'errorStatusCode'])

  if (!_.isNil(errorStatusCode)) {
    return <Error errorStatusCode={errorStatusCode} />
  }

  return children
}

export default ErrorHandler
