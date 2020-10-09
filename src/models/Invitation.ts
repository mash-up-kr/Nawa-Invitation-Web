/* External dependencies */
import Immutable from 'immutable'
import _ from 'lodash'

/* Internal dependencies */
import Map from 'models/Map'
import Image from 'models/Image'
export interface InvitationAttr {
  title: string
  contents: string
  time: Date
  placeName: string
  images: Immutable.List<Image>
  map: Map | null
  mainImage: string
  description: string
}

const InvitationRecord = Immutable.Record<InvitationAttr>({
  title: '',
  contents: '',
  time: new Date(),
  placeName: '',
  images: Immutable.List<Image>(),
  map: new Map(),
  mainImage: '',
  description: '',
})

class Invitation extends InvitationRecord {
  constructor(args: any = {}) {
    const time = new Date(args.invitationTime)
    time.setHours(time.getHours() - 9)

    super({
      ...args,
      title: args.invitationTitle,
      contents: args.invitationContents,
      placeName: args.invitationPlaceName,
      time,
      images: Immutable.List<Image>(_.get(args, 'invitationImages')).map(image => new Image(image)),
      map: _.isNil(args.mapInfo) ? args.mapInfo : new Map(args.mapInfo),
      mainImage: args.templateBackgroundImageUrl,
      description: args.templateTypeDescription,
    })
  }
}

export default Invitation
