import { Component } from "react"
import Todo from "./components/Todo/Todo"

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello todo app</h1>
        <Todo />
      </>
    )
  }
}

export default App
