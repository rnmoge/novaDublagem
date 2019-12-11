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
        console.tron.log('draft.model');
        console.tron.log(draft.model);
      });
    default:
      return state;
  }
}
