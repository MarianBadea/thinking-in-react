import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";


function ProductTable (props) {

    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    const rows = [];
    let lastCategory = null;
    

    let filteredProducts = props.products;
    if (filterText !== '') {
        filteredProducts = filterByName(filteredProducts, filterText);
    }
    if (inStockOnly) {
        filteredProducts = filterByStock(filteredProducts);
    }

    filteredProducts.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                category={product.category}
                key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        );
        lastCategory = product.category;
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
    /*render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
      let lastCategory = null;
  
      let filteredProducts = this.props.products;
      if (filterText !== '') {
        filteredProducts = filterByName(filteredProducts, filterText);
      }
      if (inStockOnly) {
        filteredProducts = filterByStock(filteredProducts);
      }
  
      filteredProducts.forEach((product) => {
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name}
          />
        );
        lastCategory = product.category;
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
  }
  
  function filterByName (products, filterText) {
    let how = (product) => {
      return product.name.includes(filterText);
    }
  
    return products.filter ( how )
  }
  
  function filterByStock (products) {
    let how = (product) => {
      return product.stocked;
    }
  
    return products.filter ( how );
  }*/

  export default ProductTable;