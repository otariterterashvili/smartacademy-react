import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Nav = () => {
  // const { carts } = useContext(CartContext)
  // console.log("carts", carts)
  return (
    <div>
      <CartContext.Consumer>
        {({ carts }) => (
          <nav>
            <div>Cart items: {carts.length}</div>
          </nav>
        )}
      </CartContext.Consumer>
    </div>
  )
}

export default Nav
