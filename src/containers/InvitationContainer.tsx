/* External dependencies */
import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'

/* Internal dependencies */
import LoadingAnimation from 'components/LoadingAnimation'
import Invitation from 'components/Invitation'
import * as invitationAction from 'modules/reducers/invitationReducer'
import * as invitationSelector from 'modules/selectors/invitationSelector'
import { usePreloader } from 'utils/preloadUtils'

interface InvitationContainerProps {
  invitationId: string
}

const LOADING_TIME = 1300

function InvitationContainer({ invitationId }: InvitationContainerProps) {
  const dispatch = useDispatch()
  const history = useHistory()

  const isFetching = useSelector(invitationSelector.getInvitationFetching)
  const isSuccess = useSelector(invitationSelector.getInvitationSuccess)
  const invitation = useSelector(invitationSelector.getInvitation)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  usePreloader(() => dispatch(invitationAction.getInvitation({ invitationId })))

  const loadInvitation = useCallback(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, LOADING_TIME)
  }, [])

  const fetchInvitation = useCallback(async () => {
    try {
      await dispatch(invitationAction.getInvitation({ invitationId })).promise
    } catch (error) {
      const errorStatusCode = _.get(error, ['response', 'status'])
      history.replace(history.location.pathname, { errorStatusCode })
    }
  }, [dispatch, invitationId, history])

  useEffect(() => {
    loadInvitation()

    if (!isSuccess) {
      fetchInvitation()
    }
  }, [isSuccess, loadInvitation, fetchInvitation])

  return isLoading || isFetching ? <LoadingAnimation /> : <Invitation invitation={invitation} />
}

export default InvitationContainer
