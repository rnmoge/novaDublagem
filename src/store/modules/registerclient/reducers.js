import produce from 'immer';

const INITIAL_STATE = {
  address: null,
  addressApi: null,
  clientsApi: null,
  providersApi: null,
  modalAddress: false,
  modalProvider: false,
  modalClient: false,
};
export default function table(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@client/OPEN_MODAL_ADDRESS':
      return produce(state, draft => {
        draft.modalAddress = true;
      });
    case '@client/CLOSE_MODAL_ADDRESS':
      return produce(state, draft => {
        draft.modalAddress = false;
      });
    case '@client/OPEN_MODAL_PROVIDER':
      return produce(state, draft => {
        draft.modalProvider = true;
      });
    case '@client/CLOSE_MODAL_PROVIDER':
      return produce(state, draft => {
        draft.modalProvider = false;
      });
    case '@client/OPEN_MODAL_CLIENT':
      return produce(state, draft => {
        draft.modalClient = true;
      });
    case '@client/CLOSE_MODAL_CLIENT':
      return produce(state, draft => {
        draft.modalClient = false;
      });
    case '@client/CEP_SUCESS':
      return produce(state, draft => {
        draft.address = action.payload.address;
      });
    case '@client/CEP_CLEAN':
      return produce(state, draft => {
        draft.address = null;
      });
    case '@client/SAVE_ADDRESS_SUCESS':
      return produce(state, draft => {
        draft.addressApi = action.payload.data;
      });
    case '@client/SAVE_CLIENT_SUCESS':
      return produce(state, draft => {
        draft.clientsApi = action.payload.data;
      });
    case '@client/SAVE_PROVIDER_SUCESS':
      return produce(state, draft => {
        draft.providersApi = action.payload.data;
      });
    default:
      return state;
  }
}
