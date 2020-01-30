export function selectItem(index) {
  return {
    type: '@editorder/SELECT_ITEM',
    payload: {index},
  };
}
export function openModalEdit(state) {
  return {
    type: '@editorder/OPEN_MODAL_EDIT',
    payload: {state},
  };
}
export function closeModalEdit(state) {
  return {
    type: '@editorder/CLOSE_MODAL_EDIT',
    payload: {state},
  };
}
export function requestPriceAndComission(idProduct, idGroupSize, idTable) {
  return {
    type: '@editorder/REQUEST_PRICE_AND_COMISSION',
    payload: {idProduct, idGroupSize, idTable},
  };
}
export function requestPriceAndComissionSucess(price, comission) {
  return {
    type: '@editorder/REQUEST_PRICE_AND_COMISSION_SUCESS',
    payload: {price, comission},
  };
}
export function requestUpdateOrder(
  size,
  comission,
  value,
  order,
  index,
  total
) {
  return {
    type: '@editorder/REQUEST_UPDATE_ORDER',
    payload: {size, comission, value, order, index, total},
  };
}
