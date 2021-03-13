import React from "react"
import { useParams, useLocation, useHistory } from "react-router-dom"

const Product = () => {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()

  return (
    <div>
      <h2>{JSON.stringify(params)}</h2>
      <h3>{location.search}</h3>
      <button
        onClick={() => history.replace(`${location.pathname}?search=oto`)}
      >
        Search
      </button>
    </div>
  )
}

export default Product
