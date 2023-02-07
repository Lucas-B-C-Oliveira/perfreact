import { ProductItem } from "./ProductItem"
import { FC } from "react";
import {
  List as _List,
  ListProps,
  ListRowRenderer,
} from "react-virtualized";

const List = _List as unknown as FC<ListProps>;

interface SearchResultsProps {
  totalPrice: number
  results: Array<{
    id: number,
    price: number,
    priceFormatted: string
    title: string
  }>
  onAddToWishist: (id: number) => void
}

export function SearchResults({ totalPrice, results, onAddToWishist }: SearchResultsProps) {

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishist={onAddToWishist}
        />
      </div>
    )
  }


  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />

      {/* {results.map(product => (<ProductItem key={product.id} product={product} onAddToWishist={onAddToWishist} />))} */}
    </div>
  )
}