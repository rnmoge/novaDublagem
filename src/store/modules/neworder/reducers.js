import produce from 'immer';

const INITIAL_STATE = {
  table: '',
  condition: '',
  idTable: '',
  dataDescription: [],
  idProduct: '',
  line: [],
  sizes: [],
  cores: [],
  comission: [],
  price: [],
  charges: [],
  packings: [],
  inputTypeCharge: '',
  inputTablePrice: '',
  inputClientState: '',
  inputPagament: '',
  inputNoteState: '',
  inputBillings: '',
  details: [],
};
export default function Login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@neworder/HANDLE_PRODUCTS':
      return produce(state, draft => {
        draft.table = action.payload.table;
        draft.condition = action.payload.condition;
      });
    case '@neworder/SELECT_TABLE_ORDER_SUCESS':
      return produce(state, draft => {
        draft.idTable = action.payload.idTable;
      });
    case '@newOrder/SEARCH_DESCRIPITION_SUCESS':
      return produce(state, draft => {
        draft.dataDescription = action.payload.data;
      });
    case '@newOrder/SEARCH_MODEL_SUCESS':
      return produce(state, draft => {
        draft.line = action.payload.data;
      });
    case '@newOrder/TABLE_PRICE_SUCESS':
      return produce(state, draft => {
        draft.sizes = action.payload.data;
      });
    case '@newOrder/COLORS_PRODUCTS':
      return produce(state, draft => {
        draft.cores = action.payload.cores;
      });
    case '@newOrder/SAVE_COMISSION':
      return produce(state, draft => {
        draft.comission = action.payload.comission;
      });
    case '@newOrder/DETAILS_PRODUCT':
      return produce(state, draft => {
        draft.details = action.payload.cores;
      });
    case '@newOrder/SIZE_PRICE_ONE_SUCESS':
      return produce(state, draft => {
        draft.price = action.payload.price;
      });
    case '@newOrder/SELECT_TYPE_CHARGE_SUCESS':
      return produce(state, draft => {
        draft.charges = action.payload.charge;
      });
    case '@newOrder/SELECT_PACKING_SUCESS':
      return produce(state, draft => {
        draft.packings = action.payload.packing;
      });
    case '@newOrder/SELECT_PAGAMENT_SUCESS':
      return produce(state, draft => {
        draft.pagaments = action.payload.pagament;
      });
    case '@newOrder/COLOR_AND_SIZES':
      return produce(state, draft => {
        draft.idProduct = action.payload.idProduct;
      });

    case '@newOrder/SAVE_PAGAMENT':
      return produce(state, draft => {
        draft.inputTypeCharge = action.payload.inputTypeCharge;
        draft.inputTablePrice = action.payload.inputTablePrice;
        draft.inputClientState = action.payload.inputClientState;
        draft.inputPagament = action.payload.inputPagament;
        draft.inputNoteState = action.payload.inputNoteState;
        draft.inputBillings = action.payload.inputBillings;
      });
    case '@newOrder/CLEAN_STATE':
      return produce(state, draft => {
        draft.dataDescription = [];
        draft.idProduct = '';
        draft.line = [];
        draft.sizes = [];
        draft.cores = [];
        draft.price = [];
        draft.charges = [];
        draft.packings = [];
        draft.details = [];
      });
    default:
      return state;
  }
}
