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
    default:
      return state;
  }
}
