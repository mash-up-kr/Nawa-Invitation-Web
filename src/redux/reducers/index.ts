import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import todoList, { todoListSaga } from './todoListReducer'

const rootReducer = combineReducers({
  todoList,
})

export function* rootSaga() {
  yield all([todoListSaga()])
}

export default rootReducer
export type rootState = ReturnType<typeof rootReducer>
