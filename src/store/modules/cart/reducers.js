import produce from 'immer';

const INITIAL_STATE = {
  stateModal: false,
  product: '',
  description: '',
  valueReal: '',
  products: [],
};
export default function Common(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/CART_OPEN':
      return produce(state, draft => {
        draft.stateModal = action.payload.state;
      });
    case '@cart/CART_CLOSE':
      return produce(state, draft => {
        draft.stateModal = action.payload.state;
      });
    // idProduct, produto, descricao, valorReal
    case '@cart/ADD_TO_CART':
      return produce(state, draft => {
        draft.products = action.payload.list;
      });
    case '@cart/REMOVE_TO_CART':
      return produce(state, draft => {
        draft.products = action.payload.list;
      });
    default:
      return state;
  }
}
