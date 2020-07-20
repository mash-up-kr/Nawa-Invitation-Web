/* External dependencies */
import Immutable from 'immutable'

export interface TodoAttr {
  id: number
  done: boolean
  content: string
}

const TodoRecord = Immutable.Record<TodoAttr>({
  id: 0,
  done: false,
  content: '',
})

class Todo extends TodoRecord {
  getId(): number {
    return this.id
  }

  getDone(): boolean {
    return this.done
  }

  getContent(): string {
    return this.content
  }
}

export default Todo
