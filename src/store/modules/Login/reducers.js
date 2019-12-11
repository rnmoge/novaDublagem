import produce from 'immer';

const INITIAL_STATE = {
  data: null,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@login/MENU_SUCESS':
      return produce(state, draft => {
        draft.data = action.payload.user;
      });
    case '@login/LOGIN_CLEAN':
      return produce(state, draft => {
        draft.data = null;
      });
    default:
      return state;
  }
}
