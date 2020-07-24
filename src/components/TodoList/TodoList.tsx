/* External dependencies */
import React from 'react'
import { OrderedMap } from 'immutable'
import classNames from 'classnames/bind'

/* Internal dependencies */
import Todo from 'components/Todo'
import TodoModel from 'models/Todo'
import styles from './TodoList.module.scss'

interface todoListProps {
  todos: OrderedMap<number, TodoModel>
  onToggleTodo: React.MouseEventHandler<HTMLInputElement>
}

const cx = classNames.bind(styles)

function TodoList({ todos, onToggleTodo }: todoListProps) {
  return (
    <div className={cx('todo-list')}>
      <div className={cx('top-bar')}>
        <input type="text" />
        <button>추가</button>
      </div>
      <ul className={cx('todos')}>
        {todos.toList().map(todo => (
          <Todo key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
        ))}
      </ul>
    </div>
  )
}

export default React.memo(TodoList)
