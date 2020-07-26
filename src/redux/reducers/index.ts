import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import todo, { todoSaga } from './todoReducer'
import invitation, { invitationSaga } from './invitationReducer'

const rootReducer = combineReducers({
  todo,
  invitation,
})

export function* rootSaga() {
  yield all([todoSaga(), invitationSaga()])
}

export default rootReducer
export type rootState = ReturnType<typeof rootReducer>
