import React from "react"
import Select from "react-select"

const options = [
  { value: "chocolate", label: "შოკოლადი" },
  { value: "strawberry", label: "მაწრყვი" },
  { value: "vanilla", label: "ვანილი" },
]

const ReactSelect = () => {
  const handleChange = (value) => {
    console.log("select value", value)
  }
  return (
    <div>
      <Select options={options} isSearchable onChange={handleChange} />
    </div>
  )
}

export default ReactSelect
