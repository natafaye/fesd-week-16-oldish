import { useParams } from "react-router-dom"
import NotFoundPage from "./NotFoundPage"

type ProductDetailPageProps = { 
  productList: Array<{ id: number, name: string, price: number }>
}

export default function ProductDetailsPage({ productList }: ProductDetailPageProps) {

  const { id } = useParams()
  // VERY IMPORTANT NOTE: all URL params are strings
  // id is currently a string with a number in it
  const numberId = id ? parseInt(id) : -1

  const product = productList.find(product => product.id === numberId)

  if(!product) {
    return <NotFoundPage/>
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  )
}