import React from "react";
import { withRouter, Link } from "react-router-dom";

export default class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete = (e) => {
    e.preventDefault();
    const { deleteProduct, product } = this.props;
    deleteProduct(product.seller.id, product.id);
  }

  handleEdit = (e) => {
    e.preventDefault();
    
  }

  render() {
    let editBtns;
    if (this.props.path === "/users/:userId") {
      editBtns = <div>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>;
    } else {
      editBtns = <div />;
    }
    return <Link to={`/products/${this.props.product.id}`}>
        <div className="product-item-container">
          <div className="product-index-img">
            <img className="product-thumb" src={this.props.product.image_url} />
          </div>
          <div className="product-index-info">
            <ul>
              <li>{this.props.product.title}</li>
              <li>${this.props.product.price}</li>
              <li>{editBtns}</li>
            </ul>
          </div>
        </div>
      </Link>;
  }
}
