/* External dependencies */
import Immutable from 'immutable'
import _ from 'lodash'

/* Internal dependencies */
import Map from 'models/Map'

export interface InvitationAttr {
  title: string
  contents: string
  time: Date
  placeName: string
  map: Map | null
  images: string[]
}

const InvitationRecord = Immutable.Record<InvitationAttr>({
  title: '',
  contents: '',
  time: new Date(),
  placeName: '',
  map: new Map(),
  images: [],
})

class Invitation extends InvitationRecord {
  constructor(args: any = {}) {
    super({
      ...args,
      title: args.invitationTitle,
      contents: args.invitationContents,
      placeName: args.invitationPlaceName,
      time: new Date(args.invitationTime),
      map: _.isNil(args.mapInfo) ? args.mapInfo : new Map(args.mapInfo),
    })
  }
}

export default Invitation
