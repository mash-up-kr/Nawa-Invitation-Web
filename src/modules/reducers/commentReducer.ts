/* eslint-disable prettier/prettier */
/* External dependencies */
import { takeLatest } from 'redux-saga/effects'
import Immutable from 'immutable'
import _ from 'lodash'

/* Internal dependencies */
import Comment from 'models/Comment'
import { CommentAttr } from 'models/Comment'
import * as commentAPI from 'api/commentAPI'
import { AsyncActionTypes, actionCreator, createAsyncActionsAndSaga } from 'utils/reduxUtils'

type Action = 
  | AsyncActionTypes<typeof getCommentsAsyncActions>
  | AsyncActionTypes<typeof createCommentAsyncActions>

type State = {
  comments: Immutable.List<Comment>
  getCommentsFetching: boolean
  getCommentsSuccess: boolean
  getCommentsError: boolean
  createCommentFetching: boolean
  createCommentSuccess: boolean
  createCommentError: boolean
}

export interface createCommentPayload {
  invitationId: string,
  userName: string,
  content: string,
}

export interface getCommentsPayload {
  invitationId: string
}

const GET_COMMENTS = 'comment/GET_COMMENTS' as const
const GET_COMMENTS_FETCHING = 'comment/GET_COMMENTS_FETCHING' as const
const GET_COMMENTS_SUCCESS = 'commnet/GET_COMMENTS_SUCCESS' as const
const GET_COMMENTS_ERROR = 'comment/GET_COMMENTS_ERROR' as const

const CREATE_COMMENT = 'comment/CREATE_COMMENT' as const
const CREATE_COMMENT_FETCHING = 'comment/CREATE_COMMENT_FETCHING' as const
const CREATE_COMMENT_SUCCESS = 'comment/CREATE_COMMENT_SUCCESS' as const
const CREATE_COMMENT_ERROR = 'comment/CREATE_COMMENT_ERROR' as const

export const getComments = actionCreator<getCommentsPayload>(GET_COMMENTS, { usePromise: true })
export const createComment = actionCreator<createCommentPayload>(CREATE_COMMENT, { usePromise: true})

const { asyncActions: getCommentsAsyncActions, asyncSaga: getCommentsSaga } = createAsyncActionsAndSaga(
  GET_COMMENTS_FETCHING,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
)<ReturnType<typeof getComments>, commentAPI.GetCommentResponseType, any>(commentAPI.getComments)


const {
  asyncActions: createCommentAsyncActions,
  asyncSaga: createCommentSaga,
} = createAsyncActionsAndSaga(
  CREATE_COMMENT_FETCHING,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
)<ReturnType<typeof createComment>, any, any>(commentAPI.createComment)

export function* commentSaga() {
  yield takeLatest(GET_COMMENTS, getCommentsSaga)
  yield takeLatest(CREATE_COMMENT, createCommentSaga)
}

const initialState: State = {
  comments: Immutable.List(),
  getCommentsFetching: false,
  getCommentsSuccess: false,
  getCommentsError: false,
  createCommentFetching: false,
  createCommentSuccess: false,
  createCommentError: false

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
        comments: Immutable.List<CommentAttr>(_.get(action, ['payload', 'comments'])).map(comment => new Comment(comment)),
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
    case CREATE_COMMENT_FETCHING:
      return {
        ...state,
        createCommentFetching: true,
        createCommentSuccess: false,
        createCommentError: false
      }
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        createCommentFetching: false,
        createCommentSuccess: true,
        createCommentError: false
      }
      case CREATE_COMMENT_ERROR:
        return {
          ...state,
          createCommentFetching: false,
          createCommentSuccess: false,
          createCommentError: true
        }
    default:
      return state
  }
}

export default commentReducer
