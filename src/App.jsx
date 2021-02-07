import { Component } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Products from "./components/Products"

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

class App extends Component {
  constructor() {
    super()
    this.state = {
      darkMode: localStorage.getItem("smart-dark") || false,
    }
    this.changeTheme = this.changeTheme.bind(this)
  }
  changeTheme() {
    localStorage.setItem("smart-dark", !this.state.darkMode)
    this.setState({
      darkMode: !this.state.darkMode,
    })
  }
  render() {
    const { darkMode } = this.state
    const theme = darkMode ? darkTheme : lightTheme
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <button onClick={this.changeTheme}>
          {!darkMode ? "Dark" : "Light"} mode
        </button>
        <main>
          <Products />
        </main>
      </ThemeProvider>
    )
  }
}

export default App
