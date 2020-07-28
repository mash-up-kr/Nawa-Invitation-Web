/* External dependencies */
//import _ from 'lodash'

/* Internal dependencies */
import { CommentAttr } from 'models/Comment'
import { ResponseType } from 'utils/reduxUtils'

const comments: CommentAttr[] = [
  {
    id: 0,
    nickname: '대드래곤',
    password: '1234',
    content: '꼭 참석할께여',
  },
  {
    id: 1,
    nickname: '은이맘',
    password: '1234',
    content: '조아요~',
  },
]

//let nextId = 2

export const getComments: ResponseType<CommentAttr[]> = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(comments)
    }, 300)
  })
}
