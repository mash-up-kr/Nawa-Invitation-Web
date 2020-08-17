/* External dependencies */
import axios from 'axios'

/* Internal dependencies */
import { ResponseType } from 'utils/reduxUtils'

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
  placeName: string
  map: ResponseMapType | null
  images: string[]
}

export const getInvitation: ResponseType<getInvitationResponseType> = ({ templateId }) => axios.get(`/invitations/${templateId}`)
