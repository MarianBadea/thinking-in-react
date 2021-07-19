import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'



function FilterableProductTable (props) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    console.log(props.products);

        return (
          <div className="container">
            <h1>Products</h1>
            <SearchBar
              filterText={filterText}
              inStockOnly={inStockOnly}
              setFilterText={setFilterText}
              setInStockOnly={setInStockOnly}
            />
            <ProductTable
              products={props.products}
              filterText={filterText}
              inStockOnly={inStockOnly}
            />
          </div>
        );
}

export default FilterableProductTable;