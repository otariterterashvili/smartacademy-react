import { Component } from "react"
import Drawer from "./components/Drawer"

class App extends Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
    this.state = {
      isOpen: true,
    }
    console.log("constructor lifecycle")
  }
  componentWillMount() {
    console.log("componentWillMount lifecycle")
  }
  componentDidMount() {
    console.log("componentDidMount lifecycle")
  }
  // componentWillUpdate(nextProps) {
  //   console.log("componentWillUpdate", nextProps)
  // }
  // componentDidUpdate(nextProps, nextState) {
  //   console.log("componentDidUpdate", nextState)
  // }
  onClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    console.log("render lifecycle")
    console.log(this.state.isOpen)
    return (
      <>
        <h1>Hello todo app</h1>
        <button onClick={this.onClick}>Show drawer</button>
        {this.state.isOpen && <Drawer open={this.state.isOpen} />}
      </>
    )
  }
}

export default App
