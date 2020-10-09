/* External dependencies */
import Immutable from 'immutable'

export interface ImageAttr {
  id: number
  url: string
}

const ImageRecord = Immutable.Record<ImageAttr>({
  id: 0,
  url: '',
})

class Image extends ImageRecord {
  constructor(args: any = {}) {
    super({
      id: args.id,
      url: args.imageUrl,
    })
  }
}

export default Image
