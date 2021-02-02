import React, { Component } from "react"
import { Parent, StyledRound } from "./StyledComponents"

class ThirdChild extends Component {
  render() {
    const { animate, components, setState, parentAnimate } = this.props
    console.log("third", this.props)
    const isAnimate = animate || parentAnimate ? "animate" : ""
    const isParent = components ? "parent" : ""
    return (
      <Parent className={isParent}>
        <StyledRound className={isAnimate} onClick={setState} />
      </Parent>
    )
  }
}

export default ThirdChild
