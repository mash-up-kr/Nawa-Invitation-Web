/* External dependencies */
import _ from 'lodash'

/* Internal dependencies */
import { TodoAttr } from 'models/Todo'
import { ResponseType } from 'utils/reduxUtils'

const todos: TodoAttr[] = [
  {
    id: 0,
    done: true,
    content: '감자한 초대장 레포지토리 만들기',
  },
  {
    id: 1,
    done: false,
    content: 'pwa적용하기',
  },
  {
    id: 2,
    done: false,
    content: '해커톤 하기',
  },
]
let id = 3

export const getTodos: ResponseType<TodoAttr[]> = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(todos)
    }, 300)
  })
}

export const createTodo: ResponseType<TodoAttr> = ({ content }) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const newTodo = {
        id: id++,
        done: false,
        content,
      }
      todos.push(newTodo)
      return resolve(newTodo)
    }, 300)
  })
}

export const toggleTodo: ResponseType<TodoAttr> = ({ id }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todo = todos.find(todo => todo.id === id)
      if (_.isNil(todo)) {
        return reject()
      }

      todo.done = !todo.done
      return resolve(todo)
    }, 300)
  })
}
