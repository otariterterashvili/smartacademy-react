import React, { useState, useRef } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Products from "./components/Products"
import Test from "./components/Test"
import useWindowSize from "./hooks/useWindowSize"

const darkTheme = {
  fc: "#f9f7f7",
  bg: "#112d4e",
  card: "#dbe2ef",
}
const lightTheme = {
  fc: "#112d4e",
  bg: "#f9f7f7",
  card: "#ffffff",
}

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) => props.theme.bg}
  }
`
// smart-dark
const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("smart-dark") || false
  )
  // input ref
  const inputRef = useRef()

  const onThemeChange = () => {
    localStorage.setItem("smart-dark", !theme)
    setTheme(!theme)
  }
  // get window dimentions
  const { width, height } = useWindowSize()

  const themeStyle = theme ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={themeStyle}>
      <GlobalStyle />
      <button onClick={onThemeChange}>{!theme ? "Dark" : "Light"} mode</button>
      <Test>
        <h1>Childer 1</h1>
        <h2>Childer 2</h2>
      </Test>

      {width > 700 && (
        <div>
          <input ref={inputRef} />
        </div>
      )}
      {/* <main>{theme && <Products />}</main> */}
    </ThemeProvider>
  )
}

export default App
