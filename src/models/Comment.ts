/* External dependencies */
import Immutable from 'immutable'

export interface CommentAttr {
  id: number
  nickname: string
  password: string
  content: string
}

const CommentRecord = Immutable.Record<CommentAttr>({
  id: 0,
  nickname: '',
  password: '',
  content: '',
})

class Comment extends CommentRecord {
  getId(): number {
    return this.id
  }

  getNickname(): string {
    return this.nickname
  }

  getPassword(): string {
    return this.password
  }

  getContent(): string {
    return this.content
  }
}

export default Comment
