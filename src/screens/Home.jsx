import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

const DUMMY_DATA = [
  { id: 0, name: "Iphone", description: "THis is test description", price: 10 },
  {
    id: 1,
    name: "Samsung",
    description: "THis is test description",
    price: 20,
  },
  { id: 2, name: "LG", description: "THis is test description", price: 30 },
  { id: 3, name: "ASD", description: "THis is test description", price: 40 },
  {
    id: 4,
    name: "dasdasd",
    description: "THis is test description",
    price: 50,
  },
]

const Home = () => {
  const { cart, dispach } = useContext(CartContext)
  return (
    <div className="product-container">
      {DUMMY_DATA.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h3>{item.price}</h3>
          <h5>{item.description}</h5>
          <button
            onClick={() => dispach({ type: "ADD_ITEM", cart: item })}
            type="button"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home
