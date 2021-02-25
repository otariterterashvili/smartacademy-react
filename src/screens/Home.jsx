import React from "react"
import { useHistory, useLocation } from "react-router-dom"

const Home = () => {
  const location = useLocation()
  const history = useHistory()
  console.log("location", location, "history", history)

  return (
    <div>
      <h1>this is home page</h1>
      <button onClick={() => history.push("/login")}>test</button>
    </div>
  )
}

export default Home
