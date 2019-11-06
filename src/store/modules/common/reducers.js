import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  error: false,
  message: '',
};
export default function Common(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@common/LOADING_ACTIVITY_ON':
      return produce(state, draft => {
        draft.loading = action.payload.loading;
        draft.error = action.payload.error;
        draft.message = action.payload.message;
      });
    case '@common/ACTION_SUCESS':
      return produce(state, draft => {
        draft.loading = action.payload.loading;
        draft.error = action.payload.error;
        draft.message = action.payload.message;
      });
    case '@common/ACTION_FAILURE':
      return produce(state, draft => {
        draft.loading = action.payload.loading;
        draft.error = action.payload.error;
        draft.message = action.payload.message;
      });
    default:
      return state;
  }
}
