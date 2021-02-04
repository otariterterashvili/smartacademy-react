import React, { Component } from "react"
import { Formik } from "formik"
import * as yup from "yup"

const validationSchema = yup.object().shape({
  email: yup.string().email("მხოლოდ მელი").required("აუცილებლად შემოსატანი"),
  age: yup
    .number()
    .positive("მხოლოდ დადებითი რიცხვები")
    .integer("მხოლოდ მთელი რიცხვები"),
})

const Form = (props) => {
  const { values, errors, handleChange, handleSubmit } = props
  console.log("formik errors", errors)
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={values.email} onChange={handleChange} />
      <input name="age" value={values.age} onChange={handleChange} />
    </form>
  )
}

class FormikForm extends Component {
  render() {
    return (
      <div>
        <h1>Formik Form</h1>
        <Formik
          initialValues={{ email: "", age: 20 }}
          validationSchema={validationSchema}
        >
          {(props) => <Form {...props} />}
        </Formik>
      </div>
    )
  }
}

export default FormikForm
