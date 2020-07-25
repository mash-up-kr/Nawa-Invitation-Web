/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import TodoModel from 'models/Todo'
import styles from './Todo.module.scss'

interface TodoProps {
  todo: TodoModel
  onToggleTodo: React.MouseEventHandler<HTMLInputElement>
}

const cx = classNames.bind(styles)

function Todo({ todo, onToggleTodo }: TodoProps) {
  return (
    <li className={cx('todo')}>
      <p>{todo.get('content')}</p>
      <input type="checkbox" data-id={todo.id} checked={todo.done} onClick={onToggleTodo} />
    </li>
  )
}

export default Todo
