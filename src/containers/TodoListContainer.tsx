/* External dependencies */
import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Internal dependencies */
import TodoList from 'components/TodoList'
import * as todoAction from 'redux/reducers/todoReducer'
import * as todoSelector from 'redux/selectors/todoSelector'

function TodoListContainer() {
  const dispatch = useDispatch()
  const todos = useSelector(todoSelector.getTodos)

  const handleToggleTodo = useCallback(
    e => {
      const { id } = e.currentTarget.dataset
      const result = dispatch(todoAction.toggleTodo({ id: parseInt(id) }))
      console.log(result)
    },
    [dispatch],
  )

  useEffect(() => {
    dispatch(todoAction.getTodos())
  }, [dispatch])

  return <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
}

export default TodoListContainer
