/* External dependencies */
import Immutable from 'immutable'

export interface MapAttr {
  addressName: string
  roadAddress: string
  latitude: number
  longitude: number
}

const MapRecord = Immutable.Record<MapAttr>({
  addressName: '',
  roadAddress: '',
  latitude: 0,
  longitude: 0,
})

class Map extends MapRecord {
  constructor(args: any = {}) {
    super({
      addressName: args.invitationAddressName,
      roadAddress: args.invitationRoadAddressName,
      latitude: args.y,
      longitude: args.x,
    })
  }
}

export default Map
