/* External dependencies */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Internal dependencies */
import TodoList from 'components/TodoList'
import * as todoListAction from 'redux/reducers/todoListReducer'
import * as todoListSelector from 'redux/selectors/todoListSelector'

function TodoListContainer() {
  const dispatch = useDispatch()
  const todoList = useSelector(todoListSelector.getTodoList)

  useEffect(() => {
    dispatch(todoListAction.getTodoList())
  }, [dispatch])

  return <TodoList todoList={todoList} />
}

export default TodoListContainer
