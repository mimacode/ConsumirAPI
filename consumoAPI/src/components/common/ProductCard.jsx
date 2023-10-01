/* eslint-disable react/prop-types */
import '../../styles/ProductCard.css'

export const ProductCard = ({title,price,image}) => {
  return (
    <div className='container'>
        <a href="#">{title}</a>
        <img src={image} alt={title} />
        <p>$ {price} COP</p>
    </div>
  )
}
