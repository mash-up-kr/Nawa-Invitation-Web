import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import todo, { todoSaga } from './todoReducer'

const rootReducer = combineReducers({
  todo,
})

export function* rootSaga() {
  yield all([todoSaga()])
}

export default rootReducer
export type rootState = ReturnType<typeof rootReducer>
