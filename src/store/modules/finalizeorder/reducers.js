import produce from 'immer';

const INITIAL_STATE = {
  emissao: null,
  codPedido: null,
  typeChargeId: null,
  packingId: null,
  idTable: null,
  descont: null,
  pagamentId: null,
  note: null,
  billingId: null,
  clientId: null,
  representativeId: null,
  typeOrder: null,
  transpoId: null,
  despachId: null,
  quant: null,
  body: [],
};
export default function Common(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@finalizeorder/SAVE_NEW_ORDER':
      return produce(state, draft => {
        draft.emissao = action.payload.emissao;
        draft.codPedido = action.payload.codPedido;
        draft.typeChargeId = action.payload.typeChargeId;
        draft.packingId = action.payload.packingId;
        draft.idTable = action.payload.idTable;
        draft.descont = action.payload.descont;
        draft.pagamentId = action.payload.pagamentId;
        draft.note = action.payload.note;
        draft.billingId = action.payload.billingId;
      });
    case '@finalizeorder/SAVE_CLIENT':
      return produce(state, draft => {
        draft.clientId = action.payload.clientId;
        draft.representativeId = action.payload.representativeId;
        draft.typeOrder = action.payload.typeOrder;
      });
    case '@finalizeorder/SELECT_TRANSPO_ID':
      return produce(state, draft => {
        draft.transpoId = action.payload.transpoId;
      });
    case '@finalizeorder/SELECT_DESPACH_ID':
      return produce(state, draft => {
        draft.despachId = action.payload.despachId;
      });
    case '@finalizeorder/CLEAN_FINALIZE_ORDER':
      return produce(state, draft => {
        draft.emissao = null;
        draft.codPedido = null;
        draft.typeChargeId = null;
        draft.packingId = null;
        draft.idTable = null;
        draft.descont = null;
        draft.pagamentId = null;
        draft.note = null;
        draft.billingId = null;
        draft.clientId = null;
        draft.representativeId = null;
        draft.typeOrder = null;
        draft.transpoId = null;
        draft.despachId = null;
      });
    case '@finalizeorder/CHANGE_QUANT':
      return produce(state, draft => {
        draft.quant = action.payload.newQuant;
      });
    default:
      return state;
  }
}
