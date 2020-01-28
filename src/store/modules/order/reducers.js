import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  clients: [],
  address: [],
};
export default function Login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@order/HANDLE_DETAILS_CLIENT_SUCESS':
      return produce(state, draft => {
        draft.data = action.payload.client;
      });
    case '@order/CLIENTS_SUCESS':
      return produce(state, draft => {
        draft.clients = action.payload.data;
      });
    case '@order/CLIENTS_ADDRESS_SUCESS':
      return produce(state, draft => {
        draft.address = action.payload.data;
      });
    case '@order/CLEAN_QUERY_ORDER':
      return produce(state, draft => {
        draft.data = [];
        draft.clients = [];
        draft.address = [];
      });
    default:
      return state;
  }
}
