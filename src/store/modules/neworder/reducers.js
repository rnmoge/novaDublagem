import produce from 'immer';

const INITIAL_STATE = {
  table: '',
  condition: '',
};
export default function Login(state = INITIAL_STATE, action) {
  console.tron.log(action);
  switch (action.type) {
    case '@neworder/HANDLE_PRODUCTS':
      return produce(state, draft => {
        draft.table = action.payload.table;
        draft.condition = action.payload.condition;
      });
    default:
      return state;
  }
}
