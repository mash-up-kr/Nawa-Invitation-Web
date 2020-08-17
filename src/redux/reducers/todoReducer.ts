/* External dependencies */
import { takeLatest } from 'redux-saga/effects'
import { OrderedMap } from 'immutable'

/* Internal dependencies */
import Todo from 'models/Todo'
import { TodoAttr } from 'models/Todo'
import * as todoAPI from 'api/todoAPI'
import { AsyncActionTypes, actionCreator, createAsyncActionsAndSaga } from 'utils/reduxUtils'

type Action =
  | AsyncActionTypes<typeof getTodosAsyncActions>
  | AsyncActionTypes<typeof createTodoAsyncActions>
  | AsyncActionTypes<typeof toggleTodoAsyncActions>

type State = {
  todos: OrderedMap<number, Todo>
  getTodosFetching: boolean
  getTodosSuccess: boolean
  getTodosError: boolean
  createTodoFetching: boolean
  createTodoSuccess: boolean
  createTodoError: boolean
  toggleTodoFetching: boolean
  toggleTodoSuccess: boolean
  toggleTodoError: boolean
}

export interface CreateTodoPayload {
  content: string
}

export interface ToggleTodoPayload {
  id: number
}

const GET_TODOS = 'todo/GET_TODOS' as const
const GET_TODOS_FETCHING = 'todo/GET_TODOS_FETCHING' as const
const GET_TODOS_SUCCESS = 'todo/GET_TODOS_SUCCESS' as const
const GET_TODOS_ERROR = 'todo/GET_TODOS_ERROR' as const
const CREATE_TODO = 'todo/CREATE_TODO' as const
const CREATE_TODO_FETCHING = 'todo/CREATE_TODO_FETCHING' as const
const CREATE_TODO_SUCCESS = 'todo/CREATE_TODO_SUCCESS' as const
const CREATE_TODO_ERROR = 'todo/CREATE_TODO_ERROR' as const
const TOGGLE_TODO = 'todo/TOGGLE_TODO' as const
const TOGGLE_TODO_FETCHING = 'todo/TOGGLE_TODO_FETCHING' as const
const TOGGLE_TODO_SUCCESS = 'todo/TOGGLE_TODO_SUCCESS' as const
const TOGGLE_TODO_ERROR = 'todo/TOGGLE_TODO_ERROR' as const

export const getTodos = actionCreator(GET_TODOS, { usePromise: true })
export const createTodo = actionCreator<CreateTodoPayload>(CREATE_TODO, { usePromise: true })
export const toggleTodo = actionCreator<ToggleTodoPayload>(TOGGLE_TODO, { usePromise: true })

const { asyncActions: getTodosAsyncActions, asyncSaga: getTodosSaga } = createAsyncActionsAndSaga(
  GET_TODOS_FETCHING,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
)<ReturnType<typeof getTodos>, TodoAttr[], any>(todoAPI.getTodos)

const { asyncActions: createTodoAsyncActions, asyncSaga: createTodoSaga } = createAsyncActionsAndSaga(
  CREATE_TODO_FETCHING,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_ERROR,
)<ReturnType<typeof createTodo>, TodoAttr, any>(todoAPI.createTodo)

const { asyncActions: toggleTodoAsyncActions, asyncSaga: toggleTodoSaga } = createAsyncActionsAndSaga(
  TOGGLE_TODO_FETCHING,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_ERROR,
)<ReturnType<typeof toggleTodo>, TodoAttr, any>(todoAPI.toggleTodo)

export function* todoSaga() {
  yield takeLatest(GET_TODOS, getTodosSaga)
  yield takeLatest(CREATE_TODO, createTodoSaga)
  yield takeLatest(TOGGLE_TODO, toggleTodoSaga)
}

const initialState: State = {
  todos: OrderedMap(),
  getTodosFetching: false,
  getTodosSuccess: false,
  getTodosError: false,
  createTodoFetching: false,
  createTodoSuccess: false,
  createTodoError: false,
  toggleTodoFetching: false,
  toggleTodoSuccess: false,
  toggleTodoError: false,
}

function todoListReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case GET_TODOS_FETCHING:
      return {
        ...state,
        getTodoListFetching: true,
        getTodoListSuccess: false,
        getTodoListError: false,
      }
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: OrderedMap<number, Todo>().withMutations(map => {
          action.payload.forEach(todo => {
            map.set(todo.id, new Todo(todo))
          })
          return map
        }),
        getTodoListFetching: false,
        getTodoListSuccess: true,
        getTodoListError: false,
      }
    case GET_TODOS_ERROR:
      return {
        ...state,
        getTodoListFetching: false,
        getTodoListSuccess: false,
        getTodoListError: true,
      }
    case CREATE_TODO_FETCHING:
      return {
        ...state,
        createTodoFetching: true,
        createTodoSuccess: false,
        createTodoError: false,
      }
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.set(action.payload.id, new Todo(action.payload)),
        createTodoFetching: false,
        createTodoSuccess: true,
        createTodoError: false,
      }
    case CREATE_TODO_ERROR:
      return {
        ...state,
        createTodoFetching: false,
        createTodoSuccess: false,
        createTodoError: true,
      }
    case TOGGLE_TODO_FETCHING:
      return {
        ...state,
        toggleTodoFetching: true,
        toggleTodoSuccess: false,
        toggleTodoError: false,
      }
    case TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.set(action.payload.id, new Todo(action.payload)),
        toggleTodoFetching: false,
        toggleTodoSuccess: true,
        toggleTodoError: false,
      }
    case TOGGLE_TODO_ERROR:
      return {
        ...state,
        toggleTodoFetching: false,
        toggleTodoSuccess: false,
        toggleTodoError: true,
      }
    default:
      return state
  }
}

export default todoListReducer
