import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import client from "./client"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter as Router } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"

import "./index.css"
import "antd/dist/antd.css"

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
