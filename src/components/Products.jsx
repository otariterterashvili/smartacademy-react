import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { SyncLoader } from "react-spinners"
import axios from "axios"

const API_URL = "https://fakestoreapi.com"

// const response = await axios.get(`${API_URL}/products`)
// isLoading: true,
// products: [],

const Products = () => {
  const [isLoading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const handleChange = () => {
    setLoading(!isLoading)
  }

  useEffect(async () => {
    const response = await axios.get(`${API_URL}/products`)
    setProducts(response.data)

    setLoading(false)
    // componentWillUnmount
    return () => {
      console.log("componentWillUnmount")
    }
  }, [])

  console.log("render")

  return (
    <Wrapper>
      <button onClick={handleChange}>testing</button>
      <Container>
        {isLoading && <SyncLoader size={30} color="#404c5d" />}
        <ProductContainer>
          {!isLoading &&
            products.map((product) => (
              <Card>
                <img src={product.image} alt={product.title} />
                <h1>{product.title}</h1>
              </Card>
            ))}
        </ProductContainer>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1300px;
  margin: 0 auto;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 30px;
`

const Card = styled.div`
  border-radius: 10px;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  padding-bottom: 20px;
  height: 430px;
  background-color: ${(props) => props.theme.card};
  a {
    color: #404c5d;
  }

  &:hover {
    box-shadow: 0px 0px 10px #adadad8e;
  }
  img {
    object-fit: cover;
    height: 200px;
  }
  h1 {
    font-size: 25px;
    color: #404c5d;
  }
`

export default Products
