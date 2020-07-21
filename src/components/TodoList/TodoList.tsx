/* External dependencies */
import React from 'react'
import Immutable from 'immutable'
import classNames from 'classnames/bind'

/* Internal dependencies */
import Todo from 'components/Todo'
import TodoModel from 'models/Todo'
import styles from './TodoList.module.scss'

interface todoListProps {
  todoList: Immutable.List<TodoModel>
}

const cx = classNames.bind(styles)

function TodoList({ todoList }: todoListProps) {
  return (
    <div className={cx('todo-list')}>
      <div className={cx('top-bar')}>
        <input type="text" />
        <button>추가</button>
      </div>
      <ul className={cx('todos')}>
        {todoList.map(todo => (
          <Todo key={todo.get('id')} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default React.memo(TodoList)
