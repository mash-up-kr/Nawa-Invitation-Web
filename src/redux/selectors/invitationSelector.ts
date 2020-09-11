/* Internal dependencies */
import { RootState } from 'redux/reducers'

export const getInvitation = (state: RootState) => state.invitation.invitation

export const getInvitationFetching = (state: RootState) => state.invitation.getInvitationFetching

export const getInvitationSuccess = (state: RootState) => state.invitation.getInvitationSuccess
