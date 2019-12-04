import produce from 'immer';

const INITIAL_STATE = {
  data: [],
};
export default function Login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@order/HANDLE_DETAILS_CLIENT_SUCESS':
      return produce(state, draft => {
        draft.data = action.payload.client;
      });
    default:
      return state;
  }
}
