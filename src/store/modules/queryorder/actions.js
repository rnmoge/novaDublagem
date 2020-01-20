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
export function copyOrder(pedidoCod, dateBilling, order, emission) {
  return {
    type: '@queryorder/COPY_ORDER',
    payload: {pedidoCod, dateBilling, order, emission},
  };
}
export function dateBilling(idProduct) {
  return {
    type: '@queryorder/DATE_BILLING',
    payload: {idProduct},
  };
}
export function dateBillingSucess(dateNew) {
  return {
    type: '@queryorder/DATE_BILLING_SUCESS',
    payload: {dateNew},
  };
}
