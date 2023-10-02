/* eslint-disable react-hooks/exhaustive-deps */
import '../../styles/ProductDetail.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard } from './ProductCard';

export const ProductDetail = () => {
  const [product, setProduct] = useState({})
  let { id } = useParams();

  const API= `https://fakestoreapi.com/products/${id}`

  useEffect(() => {
    axios.get(API).then(result => {
      console.log(result.data);
      return(
        setProduct(result.data)
      )
  })
  }, [])
  

  
  return (
    <div>
    <h2>Información del producto con identificador {id}</h2>
    { product && 
      <ProductCard 
        id={product.id} 
        title={product.title} 
        image={product.image} 
        price={product.price}
        description={product.description}
        />}
    </div>
    
  )
}
