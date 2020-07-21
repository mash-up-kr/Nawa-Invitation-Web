/* Internal dependencies */
import { rootState } from 'redux/reducers'

export const getTodoList = (state: rootState) => state.todoList.getTodoList()
