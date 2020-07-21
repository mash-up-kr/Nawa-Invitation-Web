/* External dependencies */
import { takeLatest } from 'redux-saga/effects'
import { fromJS } from 'immutable'

/* Internal dependencies */
import TodoList from 'models/TodoList'
import { TodoAttr } from 'models/Todo'
import * as todoListAPI from 'api/todoListAPI'
import {
  AsyncActionTypes,
  actionCreatorWithPromise,
  createAsyncActionsAndSaga,
} from 'utils/reduxUtils'

type Action =
  | AsyncActionTypes<typeof getTodoListAsyncActions>
  | AsyncActionTypes<typeof createTodoAsyncActions>

interface CreateTodoPayload {
  content: string
}

const GET_TODO_LIST = 'todoList/GET_TODO_LIST' as const
const GET_TODO_LIST_FETCHING = 'todoList/GET_TODO_LIST_FETCHING' as const
const GET_TODO_LIST_SUCCESS = 'todoList/GET_TODO_LIST_SUCCESS' as const
const GET_TODO_LIST_ERROR = 'todoList/GET_TODO_LIST_ERROR' as const
const CREATE_TODO = 'todoList/CREATE_TODO' as const
const CREATE_TODO_FETCHING = 'todoList/CREATE_TODO_FETCHING' as const
const CREATE_TODO_SUCCESS = 'todoList/CREATE_TODO_SUCCESS' as const
const CREATE_TODO_ERROR = 'todoList/CREATE_TODO_ERROR' as const

export const getTodoList = actionCreatorWithPromise(GET_TODO_LIST)
export const createTodo = actionCreatorWithPromise<CreateTodoPayload>(
  CREATE_TODO,
)

const {
  asyncActions: getTodoListAsyncActions,
  asyncSaga: getTodoListSaga,
} = createAsyncActionsAndSaga(
  GET_TODO_LIST_FETCHING,
  GET_TODO_LIST_SUCCESS,
  GET_TODO_LIST_ERROR,
)<ReturnType<typeof getTodoList>, TodoAttr[], any>(todoListAPI.getTodoList)

const {
  asyncActions: createTodoAsyncActions,
  asyncSaga: createTodoSaga,
} = createAsyncActionsAndSaga(
  CREATE_TODO_FETCHING,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_ERROR,
)<ReturnType<typeof createTodo>, TodoAttr, any>(todoListAPI.createTodo)

export function* todoListSaga() {
  yield takeLatest(GET_TODO_LIST, getTodoListSaga)
  yield takeLatest(CREATE_TODO, createTodoSaga)
}

const initialState: TodoList = new TodoList()

function todoListReducer(state: TodoList = initialState, action: Action) {
  switch (action.type) {
    case GET_TODO_LIST_FETCHING:
      return state.withMutations(todoList => {
        todoList.set('getTodoListFetching', true)
        todoList.set('getTodoListSuccess', false)
        todoList.set('getTodoListError', false)
      })
    case GET_TODO_LIST_SUCCESS:
      return state.withMutations(todoList => {
        todoList.set('todoList', fromJS(action.payload))
        todoList.set('getTodoListFetching', false)
        todoList.set('getTodoListSuccess', true)
        todoList.set('getTodoListError', false)
      })
    case GET_TODO_LIST_ERROR:
      return state.withMutations(todoList => {
        todoList.set('getTodoListFetching', false)
        todoList.set('getTodoListSuccess', false)
        todoList.set('getTodoListError', true)
      })
    case CREATE_TODO_FETCHING:
      return state.withMutations(todoList => {
        todoList.set('createTodoFetching', true)
        todoList.set('createTodoSuccess', false)
        todoList.set('createTodoError', false)
      })
    case CREATE_TODO_SUCCESS:
      console.log(action.payload)
      return state.withMutations(todoList => {
        todoList.set('createTodoFetching', false)
        todoList.set('createTodoSuccess', true)
        todoList.set('createTodoError', false)
      })
    case CREATE_TODO_ERROR:
      return state.withMutations(todoList => {
        todoList.set('createTodoFetching', false)
        todoList.set('createTodoSuccess', false)
        todoList.set('createTodoError', true)
      })
    default:
      return state
  }
}

export default todoListReducer
