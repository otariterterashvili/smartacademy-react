import { Component } from "react"
import Child from "./components/Child"
import {
  ChildWrapper,
  StyledRound,
  Container,
  Parent,
} from "./components/StyledComponents"
import ThirdChild from "./components/ThirdChild"

class App extends Component {
  constructor() {
    super()
    // this.handleEvent = this.handleEvent.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isAnimate: false,
    }
  }

  handleClick(e) {
    this.setState({ isAnimate: true })
    setTimeout(() => {
      this.setState({ isAnimate: false })
    }, 1000)
    // setTimeout(() => {
    //   this.setState((prevState) => {
    //     return {
    //       isLoading: false,
    //       data: [{ name: "Otar Terterashvili" }],
    //     }
    //   })
    // }, 3000)
  }

  render() {
    const isAnimate = this.state.isAnimate ? "animate" : ""
    return (
      <main>
        <Container>
          <Parent className="parent">
            <StyledRound className={isAnimate} onClick={this.handleClick} />
            <ChildWrapper>
              <Child
                animate={this.state.isAnimate}
                setState={this.handleClick}
                components={[ThirdChild, ThirdChild]}
              />
              <Child
                animate={this.state.isAnimate}
                setState={this.handleClick}
              />
              <Child animate={this.state.isAnimate} />
              <Child />
            </ChildWrapper>
          </Parent>
        </Container>
      </main>
    )
  }
}

export default App
