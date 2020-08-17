/* External dependencies */
import { takeLatest } from 'redux-saga/effects'
import { OrderedMap } from 'immutable'

/* Internal dependencies */
import Comment from 'models/Comment'
import { CommentAttr } from 'models/Comment'
import * as commentAPI from 'api/commentAPI'
import { AsyncActionTypes, actionCreator, createAsyncActionsAndSaga } from 'utils/reduxUtils'

type Action = AsyncActionTypes<typeof getCommentsAsyncActions>

type State = {
  comments: OrderedMap<number, Comment>
  getCommentsFetching: boolean
  getCommentsSuccess: boolean
  getCommentsError: boolean
}

const GET_COMMENTS = 'comment/GET_COMMENTS' as const
const GET_COMMENTS_FETCHING = 'comment/GET_COMMENTS_FETCHING' as const
const GET_COMMENTS_SUCCESS = 'commnet/GET_COMMENTS_SUCCESS' as const
const GET_COMMENTS_ERROR = 'comment/GET_COMMENTS_ERROR' as const

export const getComments = actionCreator(GET_COMMENTS, { usePromise: true })

const { asyncActions: getCommentsAsyncActions, asyncSaga: getCommentsSaga } = createAsyncActionsAndSaga(
  GET_COMMENTS_FETCHING,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
)<ReturnType<typeof getComments>, CommentAttr[], any>(commentAPI.getComments)

export function* commentSaga() {
  yield takeLatest(GET_COMMENTS, getCommentsSaga)
}

const initialState: State = {
  comments: OrderedMap(),
  getCommentsFetching: false,
  getCommentsSuccess: false,
  getCommentsError: false,
}

function commentReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case GET_COMMENTS_FETCHING:
      return {
        ...state,
        getCommentListFetching: true,
        getCommentListSuccess: false,
        getCommentListError: false,
      }
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: OrderedMap<number, Comment>().withMutations(map => {
          action.payload.forEach(comment => {
            map.set(comment.id, new Comment(comment))
          })
          return map
        }),
        getCommentListFetching: false,
        getCommentListSuccess: true,
        getCommentListError: false,
      }
    case GET_COMMENTS_ERROR:
      return {
        ...state,
        getCommentListFetching: false,
        getCommentListSuccess: false,
        getCommentListError: true,
      }
    default:
      return state
  }
}

export default commentReducer
