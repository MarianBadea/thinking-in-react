import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'



function FilterableProductTable (props) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    let filteredProducts = props.products;
    if (filterText !== '') {
        filteredProducts = filterByName(filteredProducts, filterText);
    }
    if (inStockOnly) {
        filteredProducts = filterByStock(filteredProducts);
    }

    const groupedProducts = groupByCategory(filteredProducts);

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
              groupedProducts={groupedProducts}
            />
          </div>
        );
}

function filterByName (products, filterText) {
    let how = (product) => {
      return product.name.includes(filterText);
    }
  
    return products.filter(how)
  }

  function filterByStock (products) {
    let how = (product) => {
      return product.stocked;
    }
  
    return products.filter ( how );
  }

  function groupByCategory(products) {
    function getCategories(accumulator, product) {
        let categoryProducts = accumulator[product.category] ? accumulator[product.category] : [];
        categoryProducts.push(product);
        accumulator[product.category] = categoryProducts;
        return accumulator;
    }

    return products.reduce(getCategories, {});
  }

export default FilterableProductTable;