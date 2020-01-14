// chama funções assincronas com respostas
// select busca informações sobre o estado
import {all, takeLatest, call, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';

import {
  commonLoadingActivityOn,
  commonActionFailure,
  commonActionSucess,
} from '../common/actions';
import {reponseApi} from './actions';
import {navigate} from '../../../services/navigation';
// import {navigate} from '../../../services/navigation';
function* saveOrderTotalSaga(action) {
  try {
    yield put(commonLoadingActivityOn(''));
    navigate('FinalOrder');
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
    const newProducts = [];
    for (let i = 0; i < products.length; i += 1) {
      const pedidoItemTamanhos = [];
      for (let j = 0; j < products[i].pedidoItemTamanhos.length; j += 1) {
        const {
          id: tamanho_id,
          tamanho_order: tamanho_cod,
          quant: quantidade,
        } = products[i].pedidoItemTamanhos[j];
        const pedidoItemTamanhos2 = {
          tamanho_id: Number(tamanho_id),
          tamanho_cod,
          quantidade: Number(quantidade),
        };
        pedidoItemTamanhos.push(pedidoItemTamanhos2);
      }
      const {
        cod_pedido: pedido_cod,
        id: linha_matriz_id,
        value: valor_real,
        observacao_item,
        comissao,
        data_faturamento,
        color_id: cor_id,
        grupotamanho_id,
      } = products[i];
      const pedidoItens = {
        pedido_cod,
        linha_matriz_id: Number(linha_matriz_id),
        valor_real,
        observacao_item,
        comissao,
        data_faturamento,
        cor_id: Number(cor_id),
        grupotamanho_id: Number(grupotamanho_id),
        pedidoItemTamanhos,
      };
      newProducts.push(pedidoItens);
    }
    const data2 = {
      embalagem_id: Number(packingId),
      condicao_pagamento_id: Number(pagamentId),
      tipo_cobranca_id: Number(typeChargeId),
      tabela_preco_id: Number(idTable),
      cliente_id: Number(clientId),
      emissao: codEmissao,
      pedido_cod: codPedido,
      observacao: note,
      taxa_cotacao: '12.00000',
      antecipa_faturamento: Number(billingId),
      desconto_percent: descont,
      tipo_frete: 4,
      pedido_industria: null,
      tipo_pedido: null,
      redespacho_id: null,
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
    data2.pedidoItens = newProducts;
    console.tron.log(data2);
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);
    const response = yield call(api.post, '/pedido', data2, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(
      reponseApi(
        response.data.id,
        response.data.cliente.nome_razao,
        response.data.tabelaPreco.tabelapreco,
        response.data.tipoCobranca.descricao,
        response.data.condicaoPagamento.descricao,
        response.data.pedidoItens[0].data_faturamento,
        response.data.pedidoItens
      )
    );
    yield put(commonActionSucess());
  } catch (err) {
    yield put(commonActionFailure('Erro ao Gravar o pedido'));
  }
}
function* handleOrderSaga() {
  yield put(commonLoadingActivityOn());
  navigate('Request');
}
export default all([
  takeLatest('@finalizeorder/SAVE_ORDER_TOTAL', saveOrderTotalSaga),
  takeLatest('@finalizeorder/handleOrder', handleOrderSaga),
]);
