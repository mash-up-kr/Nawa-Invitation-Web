/* External dependencies */
import Immutable from 'immutable'

export interface CommentAttr {
  id: number
  userName: string
  createdAt: string
  content: string
}

const CommentRecord = Immutable.Record<CommentAttr>({
  id: 0,
  userName: '',
  createdAt: '',
  content: '',
})

class Comment extends CommentRecord {
  constructor(args: any = {}) {
    super({
      id: args.id,
      userName: args.userName,
      createdAt: args.createdAt,
      content: args.content,
    })
  }

  getId(): number {
    return this.id
  }

  getUserName(): string {
    return this.userName
  }

  getCreatedAt(): string {
    return this.createdAt
  }

  getContent(): string {
    return this.content
  }
}

export default Comment
