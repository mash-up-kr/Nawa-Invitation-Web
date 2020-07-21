/* External dependencies */
import Immutable from 'immutable'
import _ from 'lodash'

/* Internal dependencies */
import Todo from 'models/Todo'

interface TodoListAttr {
  todoList: Immutable.List<Todo>
  getTodoListFetching: boolean
  getTodoListSuccess: boolean
  getTodoListError: boolean
  createTodoFetching: boolean
  createTodoSuccess: boolean
  createTodoError: boolean
}

const TodoListRecord = Immutable.Record<TodoListAttr>({
  todoList: Immutable.List<Todo>(),
  getTodoListFetching: false,
  getTodoListSuccess: false,
  getTodoListError: false,
  createTodoFetching: false,
  createTodoSuccess: false,
  createTodoError: false,
})

class TodoList extends TodoListRecord {
  getTodoList(): Immutable.List<Todo> {
    return this.todoList
  }

  getTodo(id: number): Todo | null {
    const todo = this.todoList.find(todo => id === todo.id)
    if (_.isNil(todo)) {
      return null
    }
    return todo
  }
}

export default TodoList
