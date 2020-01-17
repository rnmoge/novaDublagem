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
export function selectOrder(id) {
  return {
    type: '@queryorder/SELECT_ORDER',
    payload: {id},
  };
}
export function selectOrderSucess(order) {
  return {
    type: '@queryorder/SELECT_ORDER_SUCESS',
    payload: {order},
  };
}
export function backQueryOrder() {
  return {
    type: '@queryorder/BACK_QUERY_ORDER',
  };
}