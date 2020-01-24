import produce from 'immer';

const INITIAL_STATE = {
  address: null,
  addressApi: null,
  clientsApi: null,
  providersApi: null,
  banksApi: null,
  infoApi: null,
  newData: null,
  cleanCamp: null,
  modalAddress: false,
  modalProvider: false,
  modalClient: false,
  modalBank: false,
  modalInfo: false,
  address1: false,
  address2: false,
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
    case '@client/OPEN_MODAL_BANK':
      return produce(state, draft => {
        draft.modalBank = true;
      });
    case '@client/CLOSE_MODAL_BANK':
      return produce(state, draft => {
        draft.modalBank = false;
      });
    case '@client/OPEN_MODAL_INFO':
      return produce(state, draft => {
        draft.modalInfo = true;
      });
    case '@client/CLOSE_MODAL_INFO':
      return produce(state, draft => {
        draft.modalInfo = false;
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
    case '@client/SAVE_BANK_SUCESS':
      return produce(state, draft => {
        draft.banksApi = action.payload.data;
      });
    case '@client/SAVE_INFO_SUCESS':
      return produce(state, draft => {
        draft.infoApi = action.payload.data;
      });
    case '@client/SAVE_CLIENT_TOTAL_SUCESS':
      return produce(state, draft => {
        draft.newData = action.payload.data;
      });
    case '@client/CLEAN_MODALS':
      return produce(state, draft => {
        draft.cleanCamp = null;
      });
    case '@client/ADDRESS_EXIST':
      return produce(state, draft => {
        draft.address1 = action.payload.state1;
        draft.address2 = action.payload.state2;
      });
    case '@client/CLEAN_DATA':
      return produce(state, draft => {
        draft.address = null;
        draft.addressApi = null;
        draft.clientsApi = null;
        draft.providersApi = null;
        draft.banksApi = null;
        draft.infoApi = null;
        draft.newData = null;
        draft.cleanCamp = null;
        draft.modalAddress = false;
        draft.modalProvider = false;
        draft.modalClient = false;
        draft.modalBank = false;
        draft.modalInfo = false;
        draft.address1 = false;
        draft.address2 = false;
      });
    default:
      return state;
  }
}
