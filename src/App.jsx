import React from "react"
import { gql, useLazyQuery, useQuery } from "@apollo/client"
import Job from "./Job"

const GET_JOBS = gql`
  query {
    jobs {
      id
      title
      slug
      userEmail
    }
  }
`

const App = () => {
  const [getjobs, { loading, error, data }] = useLazyQuery(GET_JOBS)

  const handleClick = () => {
    getjobs()
  }

  console.log("loading", loading, "error", error, "data", data)
  if (loading) {
    return <div>loading ...</div>
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Get all job</button>
      </div>
      <div>
        {data &&
          data.jobs.map((job) => {
            return (
              <div key={job.id}>
                <h1>{job.title}</h1>
                <h2>{job.userEmail}</h2>
              </div>
            )
          })}
      </div>
      <Job />
    </>
  )
}

export default App
