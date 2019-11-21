import produce from 'immer';

const INITIAL_STATE = {
  data: [],
};
export default function table(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@table/LOGIN_REQUEST_TABLE_PRICE_SUCESS':
      return produce(state, draft => {
        draft.data = action.payload.tablePrice;
      });
    default:
      return state;
  }
}
