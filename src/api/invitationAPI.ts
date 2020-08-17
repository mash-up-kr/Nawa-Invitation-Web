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
  x: number
  y: number
  images: string[]
}

export const getInvitation: ResponseType<getInvitationResponseType> = ({ templateId }) => axios.get(`/invitations/${templateId}`)
