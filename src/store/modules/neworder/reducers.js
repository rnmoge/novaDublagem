import produce from 'immer';

const INITIAL_STATE = {
  table: '',
  condition: '',
  idTable: '',
  dataDescription: [],
  line: [],
};
export default function Login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@neworder/HANDLE_PRODUCTS':
      return produce(state, draft => {
        draft.table = action.payload.table;
        draft.condition = action.payload.condition;
      });
    case '@neworder/SELECT_TABLE_ORDER_SUCESS':
      return produce(state, draft => {
        draft.idTable = action.payload.idTable;
      });
    case '@newOrder/SEARCH_DESCRIPITION_SUCESS':
      return produce(state, draft => {
        draft.dataDescription = action.payload.data;
      });
    case '@newOrder/SEARCH_MODEL_SUCESS':
      return produce(state, draft => {
        draft.line = action.payload.data;
      });
    default:
      return state;
  }
}
