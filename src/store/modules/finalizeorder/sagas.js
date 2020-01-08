// chama funções assincronas com respostas
// select busca informações sobre o estado
import {all, takeLatest, call, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';

import {commonLoadingActivityOn} from '../common/actions';
// import {navigate} from '../../../services/navigation';
function* saveOrderTotalSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {
    codEmissao,
    codPedido,
    typeChargeId,
    packingId,
    idTable,
    descont,
    pagamentId,
    note,
    billingId,
    clientId,
    representativeId,
    typeOrder,
    transpoId,
    despachId,
    products,
  } = action.payload;
  const data2 = {
    embalagem_id: Number(packingId),
    condicao_pagamento_id: Number(pagamentId),
    tipo_cobranca_id: Number(typeChargeId),
    tabela_preco_id: Number(idTable),
    cliente_id: Number(clientId),
    emissao: codEmissao,
    pedido_cod: Number(codPedido),
    observacao: note,
    taxa_cotacao: '12.00000',
    antecipa_faturamento: Number(billingId),
    desconto_percent: Number(descont),
    tipo_frete: 4,
    pedido_industria: null,
    tipo_pedido: Number(typeOrder),
    redespacho_id: Number(despachId),
    transportadora_id: Number(transpoId),
    created_at: null,
    updated_at: null,
    representante_id: Number(representativeId),
    pedidoItens: [
      {
        linha_matriz_id: 3,
        cor_id: 1205,
        grupotamanho_id: 1,
        pedido_cod: '2',
        linha_cod: null,
        matriz_cod: null,
        cor_cod: null,
        grupo_tamanho_cod: null,
        observavao_item: 'Teste',
        data_faturamento: '2019-12-17T03:00:00.000Z',
        valor_real: '15.000',
        comissao: '5.00',
        pedidoItemTamanhos: [
          {
            tamanho_id: 7,
            created_at: '2019-12-17 01:00:00',
            updated_at: '2019-12-17 01:00:00',
            tamanho_cod: 'B',
            quantidade: 10,
          },
        ],
      },
      {
        linha_matriz_id: 2,
        cor_id: 1206,
        grupotamanho_id: 1,
        pedido_cod: '2',
        linha_cod: null,
        matriz_cod: null,
        cor_cod: null,
        grupo_tamanho_cod: null,
        observavao_item: 'Teste',
        data_faturamento: '2019-12-17T03:00:00.000Z',
        valor_real: '15.000',
        comissao: '5.00',
        pedidoItemTamanhos: [
          {
            tamanho_id: 7,
            created_at: '2019-12-17 01:00:00',
            updated_at: '2019-12-17 01:00:00',
            tamanho_cod: 'B',
            quantidade: 90,
          },
        ],
      },
    ],
  };
  // const data3 = {};
  // for (let i = 0; i < action.payload.length; i += 1) {
  //   const {
  //     codEmissao,
  //     codPedido,
  //     typeChargeId,
  //     packingId,
  //     idTable,
  //     descont,
  //     pagamentId,
  //     note,
  //     billingId,
  //     clientId,
  //     representativeId,
  //     typeOrder,
  //     transpoId,
  //     despachId,
  //     products,
  //   } = action.payload[i];
  //   const data4 = {
  //     embalagem_id: packingId,
  //     condicao_pagamento_id: pagamentId,
  //     tipo_cobranca_id: typeChargeId,
  //     tabela_preco_id: idTable,
  //     cliente_id: 1,
  //   };
  //   console.tron.log(data4);
  // }
  console.tron.log(data2);
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);
  const response = yield call(api.post, '/pedido', data2, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.tron.log(response);
}

export default all([
  takeLatest('@finalizeorder/SAVE_ORDER_TOTAL', saveOrderTotalSaga),
]);
