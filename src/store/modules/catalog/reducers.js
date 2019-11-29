import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  id: '',
  linha: '',
  matriz: '',
  descricao: '',
  caracteristicas: '',
  imagem: '',
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
    default:
      return state;
  }
}
