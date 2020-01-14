export function cartOpen(state) {
  return {
    type: '@cart/CART_OPEN',
    payload: {state},
  };
}
export function cartClose(state) {
  return {
    type: '@cart/CART_CLOSE',
    payload: {state},
  };
}
export function addToCart(list) {
  return {
    type: '@cart/ADD_TO_CART',
    payload: {list},
  };
}

export function addToCartSucess(list) {
  return {
    type: '@cart/ADD_TO_CART_SUCESS',
    payload: {list},
  };
}
export function removeToCart(list) {
  return {
    type: '@cart/REMOVE_TO_CART',
    payload: {list},
  };
}
export function cleanCart() {
  return {
    type: '@car/CLEAN_CART',
  };
}
export function requestCart() {
  return {
    type: '@cart/REQUEST_CART',
  };
}
