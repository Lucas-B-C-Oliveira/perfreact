import { memo } from 'react'

interface ProductItemProps {
  product: {
    id: number,
    price: number,
    priceFormatted: string
    title: string
  }
  onAddToWishist: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishist }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => onAddToWishist(product.id)}>Add to wishlist</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})