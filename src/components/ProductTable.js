import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";


function ProductTable ({groupedProducts}) {

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

  export default ProductTable;