/* External dependencies */
import { createSelector } from 'reselect'

/* Internal dependencies */
import { RootState } from 'modules/reducers'
import { getDate, getTime } from 'utils/dateUtils'
import { getInvitationOpenGraphImageUrl } from 'utils/templateUtils'

export const getInvitation = (state: RootState) => state.invitation.invitation

export const getInvitationFetching = (state: RootState) => state.invitation.getInvitationFetching

export const getInvitationSuccess = (state: RootState) => state.invitation.getInvitationSuccess

export const getInvitationTitle = createSelector(getInvitation, invitation => invitation.title)

export const getInvitationDate = createSelector(getInvitation, invitation => getDate(invitation.time))

export const getInvitationTime = createSelector(getInvitation, invitation => getTime(invitation.time))

export const getInvitationplaceName = createSelector(getInvitation, invitation => invitation.placeName)

export const getInvitationOpenGraphImage = createSelector(getInvitation, invitation =>
  getInvitationOpenGraphImageUrl(invitation.mainImage),
)
