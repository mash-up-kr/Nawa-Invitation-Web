/* External dependencies */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Internal dependencies */
import Invitation from 'components/Invitation'
import * as invitationAction from 'redux/reducers/invitationReducer'
import * as invitationSelector from 'redux/selectors/invitationSelector'

interface InvitationContainerProps {
  templateId: string
}

function InvitationContainer({ templateId }: InvitationContainerProps) {
  const dispatch = useDispatch()
  const invitation = useSelector(invitationSelector.getInvitation)

  useEffect(() => {
    dispatch(invitationAction.getInvitation({ templateId }))
  }, [templateId, dispatch])

  return <Invitation invitation={invitation} />
}

export default InvitationContainer
