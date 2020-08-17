import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import comment, { commentSaga } from './commentReducer'
import invitation, { invitationSaga } from './invitationReducer'

const rootReducer = combineReducers({
  comment,
  invitation,
})

export function* rootSaga() {
  yield all([commentSaga(), invitationSaga()])
}

export default rootReducer
export type rootState = ReturnType<typeof rootReducer>
