/* External dependencies */
import Immutable from 'immutable'

export interface InvitationAttr {
  invitationTitle: string
  invitationContents: string
  invitationTime: Date
  invitationAddressName: string
  invitationRoadAddress: string
  invitationPlaceName: string
  invitationX: number
  invitationY: number
  images: string[]
}

const InvitationRecord = Immutable.Record<InvitationAttr>({
  invitationTitle: '',
  invitationContents: '',
  invitationTime: new Date(),
  invitationAddressName: '',
  invitationRoadAddress: '',
  invitationPlaceName: '',
  invitationX: 0,
  invitationY: 0,
  images: [],
})

class Invitation extends InvitationRecord {}

export default Invitation
