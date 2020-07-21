/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import TodoModel from 'models/Todo'
import styles from './Todo.module.scss'

interface TodoProps {
  todo: TodoModel
}

const cx = classNames.bind(styles)

function Todo({ todo }: TodoProps) {
  console.log(todo.toJS())
  return (
    <li className={cx('todo')}>
      <p>{todo.get('content')}</p>
      <input type="checkbox" checked={todo.get('done')} />
    </li>
  )
}

export default Todo
