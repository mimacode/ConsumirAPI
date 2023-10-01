/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductCard } from './components/ProductCard'
import './styles/App.css'

function App() {
  const [products, setProducts] = useState([])
  const API = 'https://fakestoreapi.com/products'

  useEffect(() => {
    axios.get(API).then(result => {
      setProducts(result)
      console.log(result)
    })
  }, [])
  
  return (
    <>
      <h2>Lista de Productos</h2>
      <ProductCard title='KeyBoard mechanic' price='$ 150 usd'/>
    </>
  )
}

export default App
