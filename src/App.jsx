import React, { Suspense, lazy } from "react"
import { Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Loader from "./components/Loader"
import Home from "./screens/Home"
import Login from "./screens/Login"

const Product = lazy(() => import("./screens/Product"))

const App = () => {
  return (
    <main>
      <Header />
      <Suspense fallback={Loader}>
        <Switch>
          <Route path="/product/:slug">
            <Product />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </main>
  )
}

export default App
