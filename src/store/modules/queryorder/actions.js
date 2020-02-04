export function requestOrders(page, input, dataStateAux) {
  return {
    type: '@queryorder/REQUEST_ORDERS',
    payload: {page, input, dataStateAux},
  };
}
export function setpageState(page) {
  return {
    type: '@queryorder/SET_PAGE_STATE',
    payload: {page},
  };
}
export function setLastPage(last) {
  return {
    type: '@queryorder/SET_LAST_PAGE',
    payload: {last},
  };
}
export function updatePage() {
  return {
    type: '@queryorder/UPDATE_PAGE',
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
export function backOrder() {
  return {
    type: '@queryorder/BACK_ORDER',
  };
}
export function copyOrder(
  pedidoCod,
  dateBilling,
  order,
  emission,
  specialPrice
) {
  return {
    type: '@queryorder/COPY_ORDER',
    payload: {pedidoCod, dateBilling, order, emission, specialPrice},
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
export function ordersSucess(newOrders) {
  return {
    type: '@queryorder/ORDERS_SUCESS',
    payload: {newOrders},
  };
}
export function saveOrderTransmit(order) {
  return {
    type: '@queryorder/SAVE_ORDER_TRANSMIT',
    payload: {order},
  };
}
export function openModal(state) {
  return {
    type: '@queryorder/OPEN_MODAL',
    payload: {state},
  };
}
export function closeModal(state) {
  return {
    type: '@queryorder/CLOSE_MODAL',
    payload: {state},
  };
}
