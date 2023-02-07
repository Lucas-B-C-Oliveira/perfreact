import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
  results: Array<{
    id: number,
    price: number,
    title: string
  }>
  onAddToWishist: (id: number) => void
}

export function SearchResults({ results, onAddToWishist }: SearchResultsProps) {

  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price
    }, 0)
  }, [results])

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => (<ProductItem key={product.id} product={product} onAddToWishist={onAddToWishist} />))}
    </div>
  )
}