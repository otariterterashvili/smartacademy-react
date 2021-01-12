import React from "react"

function TodoItem(props) {
  const { todos, complateItem, deleteItem } = props
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.key}>
            <button onClick={() => complateItem(todo)}>complate</button>
            {todo.name} {todo.isCompleted ? "complated" : "not"}
            <button onClick={() => deleteItem(todo.key)}>delete</button>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoItem
