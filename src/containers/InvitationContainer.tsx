/* External dependencies */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Internal dependencies */
import Invitation from 'components/Invitation'
import * as invitationAction from 'redux/reducers/invitationReducer'
import * as invitationSelector from 'redux/selectors/invitationSelector'

function InvitationContainer() {
  const dispatch = useDispatch()
  const invitation = useSelector(invitationSelector.getInvitation)

  return (
    <Invitation
      title="모각코하러 모이자!"
      description="나의모임에 초대된 감자 친구들! 우리는 엄청난 서비스를 만들 수 있을꺼야!"
      date="11월 27일"
      time="오후 12시"
      simpleLocation="잠실 1동"
    />
  )
}

export default InvitationContainer
