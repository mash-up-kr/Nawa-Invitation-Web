/* External dependencies */
import axios from 'axios'

/* Internal dependencies */
import { ResponseType } from 'utils/reduxUtils'
import { getRequestUrl } from 'utils/requestUtils'

interface ResponseMapType {
  invitationAddressName: string
  invitationRoadAddressName: string
  x: number
  y: number
}

export interface getInvitationResponseType {
  invitationTitle: string
  invitationContents: string
  invitationTime: string
  invitationPlaceName: string
  mapInfo: ResponseMapType | null
  templateBackgroundImageUrl: string
  templateTypeDescription: string
}

export const getInvitation: ResponseType<getInvitationResponseType> = ({ invitationId }) => {
  return axios.get(`${getRequestUrl()}/invitations/${invitationId}?ts=${Date.now()}`)
}
