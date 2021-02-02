import React, { Component } from "react"
import { ChildWrapper, Parent, StyledRound } from "./StyledComponents"

class Child extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isAnimate: false,
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      return this.nextProps
    }
    return this.props
  }
  handleClick(e) {
    this.setState({ isAnimate: true })
    setTimeout(() => {
      this.setState({ isAnimate: false })
    }, 1000)
  }
  render() {
    console.log(this.props)
    const { animate, components, setState } = this.props
    const isAnimate = animate || this.state.isAnimate ? "animate" : ""
    const isParent = components ? "parent" : ""
    return (
      <Parent className={isParent}>
        <StyledRound className={isAnimate} onClick={setState} />
        <ChildWrapper>
          {components &&
            components.map((Item, index) => (
              <Item
                key={index}
                {...this.props}
                parentAnimate={this.state.isAnimate}
                setState={this.handleClick}
              />
            ))}
        </ChildWrapper>
      </Parent>
    )
  }
}

export default Child
