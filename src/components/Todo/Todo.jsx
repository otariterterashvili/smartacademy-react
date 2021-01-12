import React, { Component } from "react"
import TodoItem from "./TodoItem"

class Todo extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.complateItem = this.complateItem.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    const todoName = e.target.todoInput.value
    if (todoName === "") {
      return
    }
    const newTodo = {
      name: todoName,
      key: Date.now(),
      isCompleted: false,
    }
    this.setState((prevState) => {
      const items = prevState.items.concat(newTodo)
      return {
        items,
      }
    })
  }

  deleteItem(itemKey) {
    const items = this.state.items.filter((item) => item.key !== itemKey)

    this.setState({
      items,
    })
  }
  complateItem(item) {
    this.setState((prevState) => {
      const index = prevState.items.findIndex((x) => x.key === item.key)
      prevState.items[index].isCompleted = true
      return {
        items: prevState.items,
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="todoInput" placeholder="enter todo" />
          <button type="submit">Add todo</button>
        </form>
        <TodoItem
          todos={this.state.items}
          complateItem={this.complateItem}
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}

export default Todo
