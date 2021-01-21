import React, { Component } from "react"

class Input extends Component {
  constructor() {
    super()

    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      value: "",
    }
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} />
        <p>{this.state.value}</p>
      </div>
    )
  }
}

export default Input
