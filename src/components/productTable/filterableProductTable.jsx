import React, { Component } from "react";
import SearchBar from "./searchBar";
import ProductTable from "./productTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false
    };
  }

  handleFilterTextChange = filterText => {
    this.setState({ filterText });
  };

  handleInStockOnlyChange = inStockOnly => {
    this.setState({ inStockOnly });
  };

  render() {
    const { products } = this.props;

    let filteredProducts = [...products];

    if (this.state.inStockOnly) {
      filteredProducts = filteredProducts.filter(
        product => product.stocked === true
      );
    }

    if (this.state.filterText !== "") {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(this.state.filterText.toLowerCase())
      );
    }

    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockOnlyChange={this.handleInStockOnlyChange}
        />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
