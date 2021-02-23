import React from "react"
import { gql, useLazyQuery, useQuery } from "@apollo/client"

import Login from "./Login"

const App = () => {
  return (
    <section>
      <Login />
    </section>
  )
}

export default App
