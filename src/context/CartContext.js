import React, { createContext, useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer"

export const CartContext = createContext()
const initialStore = []
export const CartContextProvider = ({ children: Children }) => {
  const [carts, dispach] = useReducer(cartReducer, initialStore)
  return (
    <CartContext.Provider value={{ carts, dispach }}>
      {Children}
    </CartContext.Provider>
  )
}
