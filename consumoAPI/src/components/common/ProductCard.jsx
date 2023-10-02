/* eslint-disable react/prop-types */
import '../../styles/ProductCard.css'
import { Link } from 'react-router-dom' //para reemplazar el href del la tag a para que no recargue la pag

export const ProductCard = ({id, title,price,image}) => {
  return (
    <div className='container'>
      <div>
        <Link to={`/products/${id}`}>
          {title}
        </Link>
      </div>  
        <img src={image} alt={title} />
        <p>$ {price} COP</p>
    </div>
  )
}
