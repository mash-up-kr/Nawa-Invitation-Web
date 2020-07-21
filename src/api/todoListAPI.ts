/* Internal dependencies */
import { TodoAttr } from 'models/Todo'
import { ResponseType } from 'utils/reduxUtils'

const todoList: TodoAttr[] = [
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

export const getTodoList: ResponseType<TodoAttr[]> = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todoList)
    }, 300)
  })
}

export const createTodo: ResponseType<TodoAttr> = ({ content }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newTodo = {
        id: id++,
        done: false,
        content,
      }
      todoList.push(newTodo)
      resolve(newTodo)
    }, 300)
  })
}
