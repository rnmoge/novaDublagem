import produce from 'immer';

const INITIAL_STATE = {
  data: [],
};
export default function table(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@menu/MENU_SUCESS':
      return produce(state, draft => {
        draft.data = action.payload.userName;
      });
    default:
      return state;
  }
}
