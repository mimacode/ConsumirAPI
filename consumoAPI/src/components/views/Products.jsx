/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard } from '../common/ProductCard';
import '../../styles/products.css';

export const Products = () => {
    const [products, setProducts] = useState([])
    const API = 'https://fakestoreapi.com/products'
  
    useEffect(() => {
      axios.get(API).then(result => {
        setProducts(result.data)
      })
    }, [])
    
  return (
    <>
    <h2>Lista de Productos</h2>
    <div className='containerMapProducts'>
      {
        products ? products.map(({id, title, price, image})=>{
        return(
        <ProductCard key={id} id={id} title={title} price={price} image={image}/>
        )
      }) : ''
      }
    </div>
  </>
  )
}
