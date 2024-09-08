import { useContext } from "react"
import { useTodo } from "../todo.context"

export const Todolist = () => {
  const { todos } = useTodo

  return (
    <div>
      <div>todo: </div>
      <div>
        {todos.map((todo) => {
          return <div key={todo}>{todo}</div>
        })}
      </div>
    </div>
  )
}
