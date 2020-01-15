import produce from 'immer';

const INITIAL_STATE = {
  table: '',
  condition: '',
  idTable: '',
  dataDescription: [],
  idProduct: '',
  line: [],
  sizes: [],
  colors: [],
  comission: [],
  price: [],
  charges: [],
  packings: [],
  valueTypeCharge: '',
  valueTablePrice: '',
  valueClientState: '',
  valuePagament: '',
  valueNoteState: '',
  valueBillings: '',
  valuePacking: '',
  idTypeCharge: '',
  idPacking: '',
  idPagament: '',
  idBilling: '',
  tamanhos: [],
  details: [],
  amount: [],
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
    case 'newOrder/SIZES_SUCESS':
      return produce(state, draft => {
        draft.tamanhos = action.payload.size;
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
        draft.colors = action.payload.cores;
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
    case 'newOrder/CHANGE_DETAILS':
      return produce(state, draft => {
        draft.tamanhos = action.payload.newDetails;
      });

    case '@newOrder/SAVE_STATE':
      return produce(state, draft => {
        draft.valueTypeCharge = action.payload.inputTypeCharge;
        draft.valueTablePrice = action.payload.inputTablePrice;
        draft.valueClientState = action.payload.inputClientState;
        draft.valuePagament = action.payload.inputPagament;
        draft.valueNoteState = action.payload.inputNoteState;
        draft.valueBillings = action.payload.inputBillings;
        draft.valuePacking = action.payload.inputPacking;
        draft.idTypeCharge = action.payload.typeChargeId;
        draft.idPacking = action.payload.packingId;
        draft.idPagament = action.payload.pagamentId;
        draft.idBilling = action.payload.billingId;
      });
    case '@newOrder/CLEAN_STATE':
      return produce(state, draft => {
        draft.tamanhos = [];
      });
    case '@neworder/CLEAN_TOTAL':
      console.tron.log('entrou aqyu');
      return produce(state, draft => {
        draft.table = '';
        draft.condition = '';
        draft.idTable = '';
        draft.dataDescription = [];
        draft.idProduct = '';
        draft.line = [];
        draft.sizes = [];
        draft.colors = [];
        draft.comission = [];
        draft.price = [];
        draft.charges = [];
        draft.packings = [];
        draft.valueTypeCharge = '';
        draft.valueTablePrice = '';
        draft.valueClientState = '';
        draft.valuePagament = '';
        draft.valueNoteState = '';
        draft.valueBillings = '';
        draft.valuePacking = '';
        draft.idTypeCharge = '';
        draft.idPacking = '';
        draft.idPagament = '';
        draft.idBilling = '';
        draft.tamanhos = [];
        draft.details = [];
        draft.amount = [];
      });
    default:
      return state;
  }
}
