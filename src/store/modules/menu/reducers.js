import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  username: '',
  permission: '',
};
export default function menu(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@menu/MENU_SUCESS':
      return produce(state, draft => {
        draft.data = action.payload.data;
        draft.username = action.payload.data.username;
        draft.permission = action.payload.data.permission;
      });
    default:
      return state;
  }
}
