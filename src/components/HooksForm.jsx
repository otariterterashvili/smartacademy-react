import React from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import styled from "styled-components"
import Select from "react-select"

const options = [
  { value: "chocolate", label: "შოკოლადი" },
  { value: "strawberry", label: "მაწრყვი" },
  { value: "vanilla", label: "ვანილი" },
]

const validationSchema = yup.object().shape({
  email: yup.string().email("მხოლოდ მელი"),
  age: yup
    .number()
    .positive("მხოლოდ დადებითი რიცხვები")
    .integer("მხოლოდ მთელი რიცხვები"),
})

const HooksForm = () => {
  const onSubmit = (data) => {
    console.log("react hooks form data ->", data)
  }
  const {
    register,
    handleSubmit,
    watch,
    errors,
    getValues,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const watchAllfield = watch()
  console.log("watch", watchAllfield)

  return (
    <div>
      <h1>React hooks form</h1>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <input name="email" ref={register} />
        {errors.email && <small>{errors.email.message}</small>}
        <input name="age" ref={register} />
        <Controller
          as={<Select options={options} />}
          name="type"
          control={control}
        />

        <button type="submit">submit form</button>
      </SignUpForm>
    </div>
  )
}
const SignUpForm = styled.form`
  background: yellow;
`

export default HooksForm
