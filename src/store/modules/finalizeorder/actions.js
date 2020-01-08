export function saveNewOrder(
  emissao,
  codPedido,
  typeChargeId,
  packingId,
  idTable,
  descont,
  pagamentId,
  note,
  billingId
) {
  return {
    type: '@finalizeorder/SAVE_NEW_ORDER',
    payload: {
      emissao,
      codPedido,
      typeChargeId,
      packingId,
      idTable,
      descont,
      pagamentId,
      note,
      billingId,
    },
  };
}
export function saveClient(clientId, representativeId, typeOrder) {
  return {
    type: '@finalizeorder/SAVE_CLIENT',
    payload: {clientId, representativeId, typeOrder},
  };
}
