import produce from 'immer';

const INITIAL_STATE = {
  orders: null,
  page: 1,
  last: 0,
  order: [],
  date: '',
  newOrders: [],
  modalUpdate: false,
};
export default function table(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@queryorder/REQUEST_ORDERS_SUCESS':
      return produce(state, draft => {
        draft.orders = action.payload.orders;
      });
    case '@queryorder/SET_PAGE_STATE':
      return produce(state, draft => {
        draft.page = action.payload.page;
      });
    case '@queryorder/SET_LAST_PAGE':
      return produce(state, draft => {
        draft.last = action.payload.last;
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
    case '@queryorder/OPEN_MODAL':
      return produce(state, draft => {
        draft.modalUpdate = action.payload.state;
      });
    case '@queryorder/CLOSE_MODAL':
      return produce(state, draft => {
        draft.modalUpdate = action.payload.state;
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
