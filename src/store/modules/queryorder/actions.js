export function requestOrders(page) {
  return {
    type: '@queryorder/REQUEST_ORDERS',
    payload: {page},
  };
}
export function requestOrdersSucess(orders) {
  return {
    type: '@queryorder/REQUEST_ORDERS_SUCESS',
    payload: {orders},
  };
}
