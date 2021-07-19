function SearchBar (props) {

    return (
        <form className="filter">
          <input
            className="filter__search"
            type="text"
            placeholder="Search..."
            value={props.filterText}
            onChange={(e) => props.setFilterText(e.target.value)}
          />
          <p>
            <input
              type="checkbox"
              checked={props.inStockOnly}
              onChange={(e) => props.setInStockOnly(e.target.checked)}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
}
    
  export default SearchBar;
