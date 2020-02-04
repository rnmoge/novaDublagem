export function backDetailsClient() {
  return {
    type: '@neworder/BACK_DETAILS_CLIENT',
  };
}

export function handleProducts(table, condition) {
  return {
    type: '@neworder/HANDLE_PRODUCTS',
    payload: {table, condition},
  };
}
export function selectTableOrder(idTable) {
  return {
    type: '@neworder/SELECT_TABLE_ORDER',
    payload: {idTable},
  };
}
export function selectTableOrderSucess(idTable) {
  return {
    type: '@neworder/SELECT_TABLE_ORDER_SUCESS',
    payload: {idTable},
  };
}
export function searchDescription(id, description) {
  return {
    type: '@newOrder/SEARCH_DESCRIPITION',
    payload: {id, description},
  };
}
export function searchDescriptionSucess(data) {
  return {
    type: '@newOrder/SEARCH_DESCRIPITION_SUCESS',
    payload: {data},
  };
}
export function searchModel(linha, id, model, descricao) {
  return {
    type: '@newOrder/SEARCH_MODEL',
    payload: {linha, id, model, descricao},
  };
}
export function searchModelSucess(data) {
  return {
    type: '@newOrder/SEARCH_MODEL_SUCESS',
    payload: {data},
  };
}
export function colorAndSizes(idTable, idProduct) {
  return {
    type: '@newOrder/COLOR_AND_SIZES',
    payload: {idTable, idProduct},
  };
}

// export function colorAndSizesSucess(cores, data) {
//   return {
//     type: '@newOrder/COLOR_AND_SIZES',
//     payload: {},
//   };
// }
export function tablePriceSucess(data) {
  return {
    type: '@newOrder/TABLE_PRICE_SUCESS',
    payload: {data},
  };
}
export function colorsProduts(cores) {
  return {
    type: '@newOrder/COLORS_PRODUCTS',
    payload: {cores},
  };
}
export function saveCommision(comission) {
  return {
    type: '@newOrder/SAVE_COMISSION',
    payload: {comission},
  };
}
export function sizePriceOne(id, idGroup, sizes, idProduct) {
  return {
    type: '@newOrder/SIZE_PRICE_ONE',
    payload: {id, idGroup, sizes, idProduct},
  };
}
export function sizePriceOneSucess(price) {
  return {
    type: '@newOrder/SIZE_PRICE_ONE_SUCESS',
    payload: {price},
  };
}
export function selectTypeCharge() {
  return {
    type: '@newOrder/SELECT_TYPE_CHARGE',
  };
}
export function selectTypeChargeSucess(charge) {
  return {
    type: '@newOrder/SELECT_TYPE_CHARGE_SUCESS',
    payload: {charge},
  };
}
export function selectPackingSucess(packing) {
  return {
    type: '@newOrder/SELECT_PACKING_SUCESS',
    payload: {packing},
  };
}
export function selectPagamentSucess(pagament) {
  return {
    type: '@newOrder/SELECT_PAGAMENT_SUCESS',
    payload: {pagament},
  };
}

export function saveState(
  inputTypeCharge,
  inputTablePrice,
  inputClientState,
  inputPagament,
  inputNoteState,
  inputBillings,
  inputPacking,
  typeChargeId,
  packingId,
  pagamentId,
  billingId
) {
  return {
    type: '@newOrder/SAVE_STATE',
    payload: {
      inputTypeCharge,
      inputTablePrice,
      inputClientState,
      inputPagament,
      inputNoteState,
      inputBillings,
      inputPacking,
      typeChargeId,
      packingId,
      pagamentId,
      billingId,
    },
  };
}
export function detailsProduct(cores) {
  return {
    type: '@newOrder/DETAILS_PRODUCT',
    payload: {cores},
  };
}
export function cleanState() {
  return {
    type: '@newOrder/CLEAN_STATE',
  };
}
export function saveSizesQuant(newQuant) {
  return {
    type: 'newOrder/SAVE_SIZES_QUANT',
    payload: {newQuant},
  };
}
export function billingDate(id) {
  return {
    type: 'newOrder/BILLING_DATE',
    payload: {id},
  };
}
export function billingDateSucess(dateBillingNew) {
  return {
    type: '@newOrder/BILLING_DATE_SUCESS',
    payload: {dateBillingNew},
  };
}
export function sizesSucess(size) {
  return {
    type: 'newOrder/SIZES_SUCESS',
    payload: {size},
  };
}
export function changeDetails(newDetails) {
  return {
    type: 'newOrder/CHANGE_DETAILS',
    payload: {newDetails},
  };
}
export function cleanTotal() {
  return {
    type: '@neworder/CLEAN_TOTAL',
  };
}
