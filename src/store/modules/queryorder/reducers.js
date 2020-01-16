import produce from 'immer';

const INITIAL_STATE = {
  orders: [],
  order: [],
};
export default function table(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@queryorder/REQUEST_ORDERS_SUCESS':
      return produce(state, draft => {
        draft.orders = action.payload.orders;
      });
    case '@queryorder/SELECT_ORDER_SUCESS':
      return produce(state, draft => {
        draft.order = action.payload.order;
      });
    case '@queryorder/BACK_QUERY_ORDER':
      return produce(state, draft => {
        draft.order = [];
      });
    default:
      return state;
  }
}
