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
  // const productExist = data.find(product => {
  //   if(product.)
  // })
  return {
    type: '@cart/ADD_TO_CART',
    payload: {list},
  };
}

export function addToCartSucess(idProduct, produto, descricao, valorReal) {
  return {
    type: '@cart/ADD_TO_CART_SUCESS',
    payload: {idProduct, produto, descricao, valorReal},
  };
}
export function removeToCart(list) {
  return {
    type: '@cart/REMOVE_TO_CART',
    payload: {list},
  };
}
