import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import comment, { commentSaga } from './commentReducer'
import todo, { todoSaga } from './todoReducer'
import invitation, { invitationSaga } from './invitationReducer'

const rootReducer = combineReducers({
  todo,
  comment,
  invitation,
})

export function* rootSaga() {
  yield all([todoSaga(), commentSaga(), invitationSaga()])
}

export default rootReducer
export type rootState = ReturnType<typeof rootReducer>
