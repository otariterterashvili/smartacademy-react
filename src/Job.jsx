import React from "react"
import { gql, useMutation } from "@apollo/client"

const ADD_JOB = gql`
  mutation postJob($input: PostJobInput!) {
    postJob(input: $input) {
      id
      slug
      title
    }
  }
`

const Job = () => {
  const [addJob, { loading, error, data }] = useMutation(ADD_JOB)
  const handleAddJob = () => {
    addJob({
      variables: {
        input: {
          title: "Software Developer Smartacademy",
          commitmentId: "cjtu8esth000z0824x00wtp1i",
          companyName: "vobi",
          locationNames: "Tbilisi, Georiga",
          userEmail: "oto@gmail.com",
          description: "this is thes discription",
          applyUrl: "http://test-url.com",
        },
      },
    })
  }
  console.log("loading", loading, "error", error, "data", data)
  return (
    <div>
      <button onClick={handleAddJob}>Add Job</button>
    </div>
  )
}

export default Job
