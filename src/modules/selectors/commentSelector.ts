/* External dependencies */
import { createSelector } from 'reselect'

/* Internal dependencies */
import { RootState } from 'modules/reducers'
import { getInvitation } from 'modules/selectors/invitationSelector'

export const getComments = (state: RootState) => state.comment.comments

export const getMainImage = createSelector(getInvitation, invitation => invitation.mainImage)

export const getContents = createSelector(getInvitation, invitation => invitation.contents)
