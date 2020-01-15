import produce from 'immer';

const INITIAL_STATE = {
  orders: [],
};
export default function table(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@queryorder/REQUEST_ORDERS_SUCESS':
      return produce(state, draft => {
        draft.orders = action.payload.orders;
      });
    default:
      return state;
  }
}
