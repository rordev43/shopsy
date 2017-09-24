import merge from 'lodash/merge';

import {
  RECEIVE_CART_ERRORS,
  RECEIVE_CART_ITEM
} from '../actions/cart_items_actions';

const CartErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CART_ITEM:
      return [];
    case RECEIVE_CART_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default CartErrorsReducer;
