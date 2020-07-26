/* External dependencies */
import axios from 'axios'

/* Internal dependencies */
import { InvitationAttr } from 'models/Invitation'
import { ResponseType } from 'utils/reduxUtils'

export const getInvitation: ResponseType<InvitationAttr> = () => axios.get('/api/invitation')
