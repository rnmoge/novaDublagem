import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  id: '',
  linha: '',
  matriz: '',
  descricao: '',
  caracteristicas: '',
  imagem: '',
  product: [],
  prices: [],
  idProduto: '',
  cores: [],
  descricao1: [],
  model: [],
  input: '',
  input2: '',
};
export default function Login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@catalog/PRODUCTS_CATALOG_SUCESS':
      return produce(state, draft => {
        draft.data = action.payload.data;
        draft.id = action.payload.data.id;
        draft.linha = action.payload.data.linha;
        draft.matriz = action.payload.data.matriz;
        draft.descricao = action.payload.data.descricao;
        draft.caracteristicas = action.payload.data.caracteristicas;
        draft.imagem = action.payload.data.imagem;
      });
    case '@catalog/CATALOG_MORE_DETAILS_PRODUCT_SUCESS':
      return produce(state, draft => {
        draft.product = action.payload.product;
      });
    case '@catalog/REQUEST_TABLE_PRICE_SUCESS':
      return produce(state, draft => {
        draft.prices = action.payload.prices;
      });
    case '@catalog/PRODUCTS_CATALOG_SUCESS_ID':
      return produce(state, draft => {
        draft.cores = action.payload.cores;
      });
    case '@catalog/SEARCH_DESCRIPITION_SUCESS':
      return produce(state, draft => {
        draft.descricao1 = action.payload.data;
      });
    case '@catalog/SEARCH_MODEL_SUCESS':
      return produce(state, draft => {
        draft.model = action.payload.data;
        draft.input = action.payload.input;
      });
    case '@catalog/CATALOG_CLEAN':
      return produce(state, draft => {
        draft.data = [];
        draft.id = '';
        draft.linha = '';
        draft.matriz = '';
        draft.descricao = '';
        draft.caracteristicas = '';
        draft.imagem = '';
        draft.product = [];
        draft.prices = [];
        draft.idProduto = '';
        draft.cores = [];
        draft.descricao1 = [];
        draft.model = [];
        draft.input = '';
        draft.input2 = '';
      });
    default:
      return state;
  }
}
