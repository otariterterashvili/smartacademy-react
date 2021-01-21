import { Component } from "react"
import Input from "./components/Input"
import { StyledButton } from "./components/StyledComponents"

class App extends Component {
  constructor() {
    super()
    // this.handleEvent = this.handleEvent.bind(this)
    this.handleEvent = this.handleEvent.bind(this)
    this.state = {
      isLoading: false,
      data: [],
    }
  }

  handleEvent(e) {
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.setState((prevState) => {
        return {
          isLoading: false,
          data: [{ name: "Otar Terterashvili" }],
        }
      })
    }, 3000)
  }

  render() {
    const { isLoading, data } = this.state
    if (isLoading) {
      return (
        <div>
          <h3>Loading ...</h3>
        </div>
      )
    }
    return (
      <>
        <h1>Hello todo app</h1>
        <div style={{ marginBottom: "30px" }}>
          <StyledButton pl="30px" pr="30px">
            THis is test styled button<span>old text</span>
          </StyledButton>
        </div>
        <Input />
        <StyledButton
          className="btn"
          pl="50px"
          pr="50px"
          onClick={this.handleEvent}
          onDoubleClick={this.handleEvent}
        >
          Get My personal Data
        </StyledButton>
        {data.map((item) => (
          <div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </>
    )
  }
}

export default App
