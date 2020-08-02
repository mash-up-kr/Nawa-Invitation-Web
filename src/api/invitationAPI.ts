/* External dependencies */
import axios from 'axios'

/* Internal dependencies */
import { ResponseType } from 'utils/reduxUtils'

export interface getInvitationResponseType {
  invitationTitle: string
  invitationContents: string
  invitationTime: string
  invitationAddressName: string
  invitationRoadAddress: string
  invitationPlaceName: string
  invitationX: number
  invitationY: number
  images: string[]
}

export const getInvitation: ResponseType<getInvitationResponseType> = ({ templateId }) => axios.get(`/invitations/${templateId}`)
