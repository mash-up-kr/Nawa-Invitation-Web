/* External dependencies */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'

/* Internal dependencies */
import Invitation from 'components/Invitation'
import * as invitationAction from 'redux/reducers/invitationReducer'
import * as invitationSelector from 'redux/selectors/invitationSelector'

interface InvitationContainerProps {
  templateId: string
}

function InvitationContainer({ templateId }: InvitationContainerProps) {
  const dispatch = useDispatch()
  const history = useHistory()
  const invitation = useSelector(invitationSelector.getInvitation)

  useEffect(() => {
    ;(async () => {
      try {
        await dispatch(invitationAction.getInvitation({ templateId })).promise
      } catch (error) {
        const errorStatusCode = _.get(error, ['response', 'status'])
        history.replace(history.location.pathname, { errorStatusCode })
      }
    })()
  }, [templateId, history, dispatch])

  return <Invitation invitation={invitation} />
}

export default InvitationContainer
