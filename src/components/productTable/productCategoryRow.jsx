import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductCategoryRow extends Component {
  render() {
    const { category } = this.props;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired
};

export default ProductCategoryRow;
