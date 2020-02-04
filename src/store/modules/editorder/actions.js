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
export function removeItem(order, index) {
  return {
    type: '@editorder/REMOVE_ITEM',
    payload: {order, index},
  };
}
export function openModalRemove(state) {
  return {
    type: '@editorder/OPEN_MODAL_REMOVE',
    payload: {state},
  };
}
export function closeModalRemove(state) {
  return {
    type: '@editorder/CLOSE_MODAL_REMOVE',
    payload: {state},
  };
}
export function openModalAdd(state) {
  return {
    type: '@editorder/OPEN_MODAL_ADD',
    payload: {state},
  };
}
export function closeModalAdd(state) {
  return {
    type: '@editorder/CLOSE_MODAL_ADD',
    payload: {state},
  };
}
export function requestAddItemOrder(
  order,
  idProduct,
  colorId,
  idSize,
  pedido_cod,
  inputObservacion,
  inputMask,
  inputComissionState,
  tamanhos
) {
  return {
    type: '@editorder/REQUEST_ADD_ITEM_ORDER',
    payload: {
      order,
      idProduct,
      colorId,
      idSize,
      pedido_cod,
      inputObservacion,
      inputMask,
      inputComissionState,
      tamanhos,
    },
  };
}
