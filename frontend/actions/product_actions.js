import * as ProductApiUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

const receiveAllProducts = products => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

export const getAllProducts = () => dispatch => (
  ProductApiUtil.fetchProducts()
    .then( products => dispatch(receiveAllProducts(products)))
);

export const getProduct = (id) => dispatch => (
  ProductApiUtil.fetchProduct(id)
    .then( product => dispatch(receiveProduct(product)))
);
