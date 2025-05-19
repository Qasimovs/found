import { useSelector } from 'react-redux'

const Detail = () => {
  const { id } = useParams()
  const products = useSelector(state => state.products.products) 

  const product = products.find((item) => item._id === id)


  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{width: '300px'}} />
      <p>{product.title}</p>
      <p> ${product.price}</p>
    </div>
  )
}
    
export default Detail