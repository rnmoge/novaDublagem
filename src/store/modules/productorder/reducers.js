import produce from 'immer';

const INITIAL_STATE = {
  message: true,
  errorDate: false,
  messageDate: '',
  modal: false,
  modalTransport: false,
  transport: [],
  dataTransport: [],
  dataDespach: [],
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
    case '@productorder/SELECT_TRANSPORT_SUCESS':
      return produce(state, draft => {
        draft.transport = action.payload.transport;
      });
    case '@productorder/SELECT_TRANSPORT_INPUT_SUCESS':
      return produce(state, draft => {
        draft.dataTransport = action.payload.transport;
      });
    case '@productorder/SELECT_DESPACH_INPUT_SUCESS':
      return produce(state, draft => {
        draft.dataDespach = action.payload.despach;
      });
    case '@productorder/OPEN_TRANSPORT':
      return produce(state, draft => {
        draft.modalTransport = action.payload.state;
      });
    case '@productorder/CLOSE_TRANSPORT':
      return produce(state, draft => {
        draft.modalTransport = action.payload.state;
      });
    default:
      return state;
  }
}
