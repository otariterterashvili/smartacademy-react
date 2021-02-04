import { Component } from "react"
import FormikForm from "./components/FormikForm"
import HooksForm from "./components/HooksForm"
import ReactSelect from "./components/ReactSelect"

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <main>
        <FormikForm />
        <HooksForm />
        <ReactSelect />
      </main>
    )
  }
}

export default App
