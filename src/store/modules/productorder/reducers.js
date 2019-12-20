import produce from 'immer';

const INITIAL_STATE = {
  message: true,
  errorDate: false,
  messageDate: '',
  modal: false,
};
export default function Login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@productorder/DATE_VALIDATOR_SUCESS':
      return produce(state, draft => {
        draft.message = action.payload.message;
        if (draft.message === true) {
          draft.errorDate = false;
          draft.messageDate = 'Data aceita';
          draft.modal = true;
        } else {
          draft.errorDate = true;
          draft.messageDate = '';
        }
      });
    case '@productorder/CLEAN_VALIDATOR':
      return produce(state, draft => {
        draft.message = [];
      });
    default:
      return state;
  }
}
