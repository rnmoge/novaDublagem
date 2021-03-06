import produce from 'immer';

const INITIAL_STATE = {
  index: 0,
  modalEdit: false,
  price: [],
  comission: [],
  modalRemove: false,
  modalAdd: false,
};
export default function Common(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@editorder/SELECT_ITEM':
      return produce(state, draft => {
        draft.index = action.payload.index;
      });
    case '@editorder/OPEN_MODAL_EDIT':
      return produce(state, draft => {
        draft.modalEdit = action.payload.state;
      });
    case '@editorder/CLOSE_MODAL_EDIT':
      return produce(state, draft => {
        draft.modalEdit = action.payload.state;
      });
    case '@editorder/REQUEST_PRICE_AND_COMISSION_SUCESS':
      return produce(state, draft => {
        draft.price = action.payload.price;
        draft.comission = action.payload.comission;
      });
    case '@editorder/OPEN_MODAL_REMOVE':
      return produce(state, draft => {
        draft.modalRemove = action.payload.state;
      });
    case '@editorder/CLOSE_MODAL_REMOVE':
      return produce(state, draft => {
        draft.modalRemove = action.payload.state;
      });
    case '@editorder/CLOSE_MODAL_ADD':
      return produce(state, draft => {
        draft.modalAdd = action.payload.state;
      });
    case '@editorder/OPEN_MODAL_ADD':
      return produce(state, draft => {
        draft.modalAdd = action.payload.state;
      });
    default:
      return state;
  }
}
