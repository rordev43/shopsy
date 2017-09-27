import React from "react";
import Banner from "../banner/banner.jsx";
import ProductIndexContainer from "../products/product_index_container";
import { withRouter } from "react-router-dom";

export default class Homepage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Banner />
        <h1>Featured Products</h1>
        <ProductIndexContainer location={this.props.location} />
      </div>
    );
  }
}
