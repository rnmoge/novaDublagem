import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
import api from '../../../services/api';

import {
  commonLoadingActivityOn,
  commonActionFailure,
  commonActionSucess,
} from '../common/actions';
import {requestPriceAndComissionSucess, openModalRemove} from './actions';
import {selectOrderSucess} from '../queryorder/actions';
// import {menuSucess} from '../menu/actions';
import {navigate} from '../../../services/navigation';
// import api2 from '../../../services/api2';

function* requestPriceAndComission(action) {
  yield put(commonLoadingActivityOn());
  const {idProduct, idGroupSize, idTable} = action.payload;
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);

  try {
    const table = yield call(api.get, `tabelapreco/${idTable}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const {
      data: {data},
    } = yield call(
      api.get,
      `/tabelaprecolinhamatriz?tabelapreco=${idTable}&linhamatriz=${idProduct}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const price1 = data.find(element => {
      return element.grupotamanho_id === idGroupSize;
    });

    yield put(requestPriceAndComissionSucess(price1, table.data));
    yield put(commonActionSucess());
  } catch (err) {
    yield put(commonActionFailure());
  }
}

function* requestUpdateOrder(action) {
  yield put(commonLoadingActivityOn());
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);
  try {
    const {size, comission, value, order, total} = action.payload;

    const {
      id,
      pedido_id,
      linha_matriz_id,
      cor_id,
      grupotamanho_id,
      pedido_cod,
      linha_cod,
      matriz_cod,
      cor_cod,
      grupo_tamanho_cod,
      observacao_item,
      created_at,
      updated_at,
      preco_especial,
      data_entrega,
      quantidade_item_total,
      preco_item_total,
    } = total;

    const pedidoItemTamanhos = [];
    for (let i = 0; i < size.length; i += 1) {
      const {
        id,
        pedidos_item_id,
        tamanho_id,
        tamanho_cod,
        quant: quantidade,
        sequencia_item,
        data_faturamento,
      } = size[i];

      const New = {
        id,
        pedidos_item_id,
        tamanho_id,
        tamanho_cod,
        quantidade,
        sequencia_item,
        data_faturamento,
      };

      pedidoItemTamanhos.push(New);
    }
    const pedidoItens2 = {
      id,
      pedido_id,
      linha_matriz_id,
      cor_id,
      grupotamanho_id,
      pedido_cod,
      linha_cod,
      matriz_cod,
      cor_cod,
      grupo_tamanho_cod,
      observacao_item,
      valor_real: value,
      comissao: comission,
      created_at,
      updated_at,
      preco_especial,
      data_entrega,
      quantidade_item_total,
      preco_item_total,
      pedidoItemTamanhos,
    };

    const {pedidoItens: orders} = order;

    const pedidoItens = [];
    const itemExist = orders.findIndex(item => {
      return item.id === pedidoItens2.id;
    });

    if (itemExist !== -1) {
      const newList = orders.map((element, index) => {
        if (index === itemExist) {
          return {
            id: element.id,
            pedido_id: element.pedido_id,
            linha_matriz_id: element.linha_matriz_id,
            cor_id: element.cor_id,
            grupotamanho_id: element.grupotamanho_id,
            pedido_cod: element.pedido_cod,
            linha_cod: element.linha_cod,
            matriz_cod: element.matriz_cod,
            cor_cod: element.cor_cod,
            grupo_tamanho_cod: element.grupo_tamanho_cod,
            observacao_item: element.observacao_item,
            valor_real: value,
            comissao: comission,
            created_at: element.created_at,
            updated_at: element.updated_at,
            preco_especial: element.preco_especial,
            data_entrega: element.data_entrega,
            quantidade_item_total: element.quantidade_item_total,
            preco_item_total: element.preco_item_total,
            pedidoItemTamanhos: pedidoItens2.pedidoItemTamanhos,
          };
        }
        return {
          id: element.id,
          pedido_id: element.pedido_id,
          linha_matriz_id: element.linha_matriz_id,
          cor_id: element.cor_id,
          grupotamanho_id: element.grupotamanho_id,
          pedido_cod: element.pedido_cod,
          linha_cod: element.linha_cod,
          matriz_cod: element.matriz_cod,
          cor_cod: element.cor_cod,
          grupo_tamanho_cod: element.grupo_tamanho_cod,
          observacao_item: element.observacao_item,
          valor_real: element.valor_real,
          comissao: element.comissao,
          created_at: element.created_at,
          updated_at: element.updated_at,
          preco_especial: element.preco_especial,
          data_entrega: element.data_entrega,
          quantidade_item_total: element.quantidade_item_total,
          preco_item_total: element.preco_item_total,
          pedidoItemTamanhos: element.pedidoItemTamanhos,
        };
      });
      for (let i = 0; i < newList.length; i += 1) {
        const {
          id,
          pedido_id,
          linha_matriz_id,
          cor_id,
          grupotamanho_id,
          pedido_cod,
          linha_cod,
          matriz_cod,
          cor_cod,
          grupo_tamanho_cod,
          observacao_item,
          valor_real,
          comissao,
          created_at,
          updated_at,
          preco_especial,
          data_entrega,
          quantidade_item_total,
          preco_item_total,
          pedidoItemTamanhos,
        } = newList[i];
        const new4 = {
          id,
          pedido_id,
          linha_matriz_id,
          cor_id,
          grupotamanho_id,
          pedido_cod,
          linha_cod,
          matriz_cod,
          cor_cod,
          grupo_tamanho_cod,
          observacao_item,
          valor_real,
          comissao,
          created_at,
          updated_at,
          preco_especial,
          data_entrega,
          quantidade_item_total,
          preco_item_total,
          pedidoItemTamanhos,
        };
        pedidoItens.push(new4);
      }
    }
    const {
      id: idProduct,
      embalagem_id,
      condicao_pagamento_id,
      tipo_cobranca_id,
      tabela_preco_id,
      cliente_id,
      emissao,
      observacao,
      taxa_cotacao,
      antecipa_faturamento,
      desconto_percent,
      tipo_frete,
      pedido_industria,
      transportadora_id,
      representante_id,
      situacao_cod,
      usuario_cadastro,
    } = order;
    const data2 = {
      id: idProduct,
      embalagem_id,
      condicao_pagamento_id,
      tipo_cobranca_id,
      tabela_preco_id,
      cliente_id,
      emissao,
      pedido_cod,
      observacao,
      taxa_cotacao,
      antecipa_faturamento,
      desconto_percent,
      tipo_frete,
      pedido_industria,
      transportadora_id,
      created_at,
      updated_at,
      representante_id,
      situacao_cod,
      usuario_cadastro,
      pedidoItens,
    };

    yield put(commonLoadingActivityOn());
    const response = yield call(api.put, `/pedido/${idProduct}`, data2, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response2 = yield call(api.get, `/pedido/${response.data.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(selectOrderSucess(response2.data));

    yield put(commonActionSucess());
  } catch (err) {
    yield put(commonActionFailure());
  }
}

function* removeItemSaga(action) {
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);
  yield put(commonLoadingActivityOn());
  const {order, index} = action.payload;

  const {
    pedidoItens: pedido,
    id: idProduct,
    embalagem_id,
    condicao_pagamento_id,
    tipo_cobranca_id,
    tabela_preco_id,
    cliente_id,
    emissao,
    pedido_cod,
    observacao,
    taxa_cotacao,
    antecipa_faturamento,
    desconto_percent,
    tipo_frete,
    pedido_industria,
    transportadora_id,
    created_at,
    updated_at,
    representante_id,
    situacao_cod,
    usuario_cadastro,
  } = order;
  if (pedido.length > 1) {
    const pedidoItens = [];
    const newList = pedido.filter((element, indexItem) => {
      if (index !== indexItem) {
        return element;
      }
    });
    for (let i = 0; i < newList.length; i += 1) {
      const {
        id,
        pedido_id,
        linha_matriz_id,
        cor_id,
        grupotamanho_id,
        pedido_cod,
        linha_cod,
        matriz_cod,
        cor_cod,
        grupo_tamanho_cod,
        observacao_item,
        valor_real,
        comissao,
        created_at,
        updated_at,
        preco_especial,
        data_entrega,
        quantidade_item_total,
        preco_item_total,
        pedidoItemTamanhos,
      } = newList[i];
      const new4 = {
        id,
        pedido_id,
        linha_matriz_id,
        cor_id,
        grupotamanho_id,
        pedido_cod,
        linha_cod,
        matriz_cod,
        cor_cod,
        grupo_tamanho_cod,
        observacao_item,
        valor_real,
        comissao,
        created_at,
        updated_at,
        preco_especial,
        data_entrega,
        quantidade_item_total,
        preco_item_total,
        pedidoItemTamanhos,
      };
      pedidoItens.push(new4);
    }

    const data = {
      id: idProduct,
      embalagem_id,
      condicao_pagamento_id,
      tipo_cobranca_id,
      tabela_preco_id,
      cliente_id,
      emissao,
      pedido_cod,
      observacao,
      taxa_cotacao,
      antecipa_faturamento,
      desconto_percent,
      tipo_frete,
      pedido_industria,
      transportadora_id,
      created_at,
      updated_at,
      representante_id,
      situacao_cod,
      usuario_cadastro,
      pedidoItens,
    };

    const response = yield call(api.put, `/pedido/${idProduct}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response2 = yield call(api.get, `/pedido/${response.data.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(selectOrderSucess(response2.data));

    yield put(commonActionSucess());
  } else {
    yield put(openModalRemove(true));
    yield put(commonActionSucess());
  }
  yield put(commonActionSucess());
}

function* requestAddItemSaga(action) {
  yield put(commonLoadingActivityOn());
  const {
    order,
    idProduct,
    colorId,
    idSize,
    pedido_cod,
    inputObservacion,
    inputMask,
    inputComissionState,
    tamanhos,
  } = action.payload;
  const newSize2 = [];
  try {
    for (let i = 0; i < tamanhos.length; i += 1) {
      const {
        id,
        tamanho_order,
        descricao,
        created_at,
        updated_at,
        quant: quantidade,
      } = tamanhos[i];

      const newSizes = {
        id,
        tamanho_order,
        created_at,
        updated_at,
        quantidade,
      };
      newSize2.push(newSizes);
    }

    const newItem = {
      id: idProduct,
      color_id: colorId,
      grupo_tamanho_id: idSize,
      pedido_cod,
      observacao_item: inputObservacion,
      data_faturamento: inputMask,
      comissao: inputComissionState,
      pedidoItemTamanhos: newSize2,
    };
    yield put(commonActionSucess());
  } catch (err) {
    yield put(commonActionFailure());
  }
}

export default all([
  takeLatest(
    '@editorder/REQUEST_PRICE_AND_COMISSION',
    requestPriceAndComission
  ),
  takeLatest('@editorder/REQUEST_UPDATE_ORDER', requestUpdateOrder),
  takeLatest('@editorder/REMOVE_ITEM', removeItemSaga),
  takeLatest('@editorder/REQUEST_ADD_ITEM_ORDER', requestAddItemSaga),
]);
