/* External dependencies */
import Immutable from 'immutable'

export interface KakaoMapAttr {
  addressName: string
  roadAddress: string
  placeName: string
  latitude: number
  longitude: number
}

const KakaoMapRecord = Immutable.Record<KakaoMapAttr>({
  addressName: '',
  roadAddress: '',
  placeName: '',
  latitude: 0,
  longitude: 0,
})

class KakaoMap extends KakaoMapRecord {}

export default KakaoMap
