import { connect } from 'react-redux';
import CartItemsIndex from './cart_items_index';
import { getAllProducts } from '../../actions/product_actions';
import { getCartItems } from '../../actions/cart_items_actions';

const mapStateToProps = ({ cartItems, products }) => {
  const cartProducts = Object.values(cartItems).map( cartItem =>
  products[cartItem.product_id]);
  return ({ cartProducts });
};

const mapDispatchToProps = state => dispatch => ({
  getCartItems: () => dispatch(getCartItems()),
  getAllProducts: () => dispatch(getAllProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItemsIndex);
