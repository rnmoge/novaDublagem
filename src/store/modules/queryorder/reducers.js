import produce from 'immer';

const INITIAL_STATE = {
  orders: null,
  order: [],
  date: '',
  newOrders: [],
};
export default function table(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@queryorder/REQUEST_ORDERS_SUCESS':
      return produce(state, draft => {
        draft.orders = action.payload.orders;
      });
    case '@queryorder/ORDERS_SUCESS':
      return produce(state, draft => {
        draft.newOrders = action.payload.newOrders;
      });
    case '@queryorder/SELECT_ORDER_SUCESS':
      return produce(state, draft => {
        draft.order = action.payload.order;
      });
    case '@queryorder/DATE_BILLING_SUCESS':
      return produce(state, draft => {
        draft.date = action.payload.dateNew;
      });
    // case '@queryorder/BACK_QUERY_ORDER':
    //   return produce(state, draft => {
    //     draft.order = [];
    //     draft.date = '';
    //   });
    default:
      return state;
  }
}
