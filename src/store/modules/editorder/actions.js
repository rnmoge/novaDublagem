export function selectItem(index) {
  return {
    type: '@editorder/SELECT_ITEM',
    payload: {index},
  };
}
export function requestPriceAndComission(idProduct, idGroupSize, idTable) {
  return {
    type: '@editorder/REQUEST_PRICE_AND_COMISSION',
    payload: {idProduct, idGroupSize, idTable},
  };
}
export function requestUpdateOrder(size, comission, value, order) {
  return {
    type: '@editorder/REQUEST_UPDATE_ORDER',
    payload: {size, comission, value, order},
  };
}
