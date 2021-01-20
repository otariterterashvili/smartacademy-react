import React, { Component } from "react"

class Drawer extends Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps)
    // return props or setState
    return nextProps
  }
  // shouldComponentUpdate(nextProps) {
  //   // console.log("shouldComponentUpdate", nextProps)
  // }
  componentWillUnmount() {
    // invoke when componenet unmount
    console.log("componentWillUnmount")
  }
  render() {
    console.log("drawer render lifecycle")
    return (
      <div>
        <h2>This is nav drawer</h2>
      </div>
    )
  }
}

export default Drawer
