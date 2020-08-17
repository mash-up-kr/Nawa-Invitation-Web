/* External dependencies */
import Immutable from 'immutable'

/* Internal dependencies */
import KakaoMap from 'models/KakaoMap'

export interface InvitationAttr {
  title: string
  contents: string
  time: Date
  kakaoMap: KakaoMap
  images: string[]
}

const InvitationRecord = Immutable.Record<InvitationAttr>({
  title: '',
  contents: '',
  time: new Date(),
  kakaoMap: new KakaoMap(),
  images: [],
})

class Invitation extends InvitationRecord {}

export default Invitation
