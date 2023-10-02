/* eslint-disable react/prop-types */
import '../../styles/ProductCard.css'
import { Link } from 'react-router-dom' //para reemplazar el href del la tag a para que no recargue la pag

export const ProductCard = ({id, title,price,image, description}) => {
  return (
    <div className={description ? 'containerDescription' : 'container'}>
      <div>
        <Link to={`/products/${id}`}>
          {title}
        </Link>
      </div>  
        <img src={image} alt={title} />
        {description && <p className='description'>{description}</p>}
        <p>$ {price} COP</p>
    </div>
  )
}
