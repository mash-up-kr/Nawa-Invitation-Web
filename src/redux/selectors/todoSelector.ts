/* Internal dependencies */
import { rootState } from 'redux/reducers'

export const getTodos = (state: rootState) => state.todo.todos
