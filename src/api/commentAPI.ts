/* External dependencies */
import axios from 'axios'

/* Internal dependencies */
import { ResponseType } from 'utils/reduxUtils'
import { getRequestUrl } from 'utils/requestUtils'

interface CommentType {
  id: number
  userName: string
  createdAt: string
  content: string
}

export interface GetCommentResponseType {
  comments: CommentType[]
}

export const getComments: ResponseType<GetCommentResponseType> = ({ invitationId }) => {
  return axios.get(`${getRequestUrl()}/apis/v2/invitations/${invitationId}/comments`)
}

export const createComment = ({ invitationId, userName, content }) => {
  return axios.post(`${getRequestUrl()}/apis/v2/invitations/${invitationId}/comments`, {
    userName,
    content,
  })
}
