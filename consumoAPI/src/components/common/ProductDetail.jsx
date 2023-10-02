import '../../styles/ProductDetail.css'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
  
  let { id } = useParams();
  
  return (
    <div>Información del producto con identificador {id}</div>
  )
}
