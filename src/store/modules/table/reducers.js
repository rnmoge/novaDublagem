import produce from 'immer';

const INITIAL_STATE = {
  table: [],
  data2: [],
};
export default function table(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@table/LOGIN_REQUEST_TABLE_PRICE_SUCESS':
      return produce(state, draft => {
        draft.table = action.payload.tablePrice;
      });
    case '@table/SELECT_TABLE_PRICE_SUCESS':
      return produce(state, draft => {
        draft.data2 = action.payload.id;
      });
    default:
      return state;
  }
}
