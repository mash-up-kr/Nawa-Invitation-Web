/* External dependencies */
import Immutable from 'immutable'

export interface InvitationAttr {
  title: string
  contents: string
  time: Date
  addressName: string
  roadAddress: string
  placeName: string
  latitude: number
  longitude: number
  images: string[]
}

const InvitationRecord = Immutable.Record<InvitationAttr>({
  title: '',
  contents: '',
  time: new Date(),
  addressName: '',
  roadAddress: '',
  placeName: '',
  latitude: 0,
  longitude: 0,
  images: [],
})

class Invitation extends InvitationRecord {}

export default Invitation
