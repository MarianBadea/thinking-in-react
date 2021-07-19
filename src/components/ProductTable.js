import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";


function ProductTable (props) {

    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    let filteredProducts = props.products;
    if (filterText !== '') {
        filteredProducts = filterByName(filteredProducts, filterText);
    }
    if (inStockOnly) {
        filteredProducts = filterByStock(filteredProducts);
    }

    const groupedProducts = groupByCategory(filteredProducts);
    console.log(groupedProducts);
    console.log(Object.entries(groupedProducts));
    const rows = Object.entries(groupedProducts).map(([category, categoryProducts]) => {

        const result = [];

        result.push(
            <ProductCategoryRow
                category={category}
                key={category} 
            />);

        categoryProducts.map(product => {
            result.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />)
        });

        return result;
    });  

    return (
        <table className="product-table">
          <thead>
            <tr className="porduct-table-header product-table-row">
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
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

  export default ProductTable;