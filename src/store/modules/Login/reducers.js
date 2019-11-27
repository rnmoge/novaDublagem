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
    default:
      return state;
  }
}
