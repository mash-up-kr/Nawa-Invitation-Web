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
      time: new Date(args.invitationTime),
      map: _.isNil(args.map) ? args.map : new Map(args.map),
    })
  }
}

export default Invitation
