import produce from 'immer';

const INITIAL_STATE = {
  index: 0,
};
export default function Common(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@editorder/SELECT_ITEM':
      return produce(state, draft => {
        draft.index = action.payload.index;
      });

    default:
      return state;
  }
}
