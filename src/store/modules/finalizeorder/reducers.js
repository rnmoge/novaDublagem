import produce from 'immer';

const INITIAL_STATE = {
  emissao: '',
  typeChargeId: '',
  packingId: '',
  idTable: '',
  descont: '',
  pagamentId: '',
  note: '',
  billingId: '',
  clientId: '',
  representativeId: '',
  typeOrder: '',
  body: [],
};
export default function Common(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@finalizeorder/SAVE_NEW_ORDER':
      return produce(state, draft => {
        draft.emissao = action.payload.emissao;
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
    default:
      return state;
  }
}
