// chama funções assincronas com respostas
// select busca informações sobre o estado
import {all, takeLatest, call, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';
import {cleanCart, cartCloseFinalize} from '../cart/actions';
import {cleanState, cleanTotal} from '../neworder/actions';

import {
  commonLoadingActivityOn,
  commonActionFailure,
  commonActionSucess,
} from '../common/actions';
import {reponseApi, priceTotal} from './actions';
import {navigate} from '../../../services/navigation';
// import {navigate} from '../../../services/navigation';

function* saveNewOrderSaga(action) {
  yield put(commonLoadingActivityOn(''));
  yield call(
    AsyncStorage.setItem,
    '@novaDublagem:newOrder',
    JSON.stringify(action.payload)
  );
  let data = yield call(AsyncStorage.getItem, '@novaDublagem:newOrder');
  data = JSON.parse(data);

  yield put(commonActionSucess());
}

function* saveOrderTotalSaga(action) {
  let data = yield call(AsyncStorage.getItem, '@novaDublagem:newOrder');
  data = JSON.parse(data);
  let product = yield call(AsyncStorage.getItem, '@novaDublagem:Products');
  product = JSON.parse(product);
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);
  const {
    emissao,
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
  } = data;
  try {
    yield put(commonLoadingActivityOn(''));
    navigate('FinalOrder');
    const newProducts = [];
    const {transpoId, situacaoCod} = action.payload;
    for (let i = 0; i < product.length; i += 1) {
      const pedidoItemTamanhos = [];
      for (let j = 0; j < product[i].pedidoItemTamanhos.length; j += 1) {
        const {
          id: tamanho_id,
          tamanho_order: tamanho_cod,
          quant: quantidade,
        } = product[i].pedidoItemTamanhos[j];
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
        data_entrega,
        preco_especial,
        color_id: cor_id,
        grupotamanho_id,
      } = product[i];

      const pedidoItens = {
        pedido_cod,
        linha_matriz_id: Number(linha_matriz_id),
        valor_real,
        observacao_item,
        comissao,
        data_entrega,
        preco_especial,
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
      emissao,
      pedido_cod: codPedido,
      observacao: note,
      taxa_cotacao: '12.00000',
      antecipa_faturamento: Number(billingId),
      desconto_percent: descont,
      tipo_frete: 4,
      pedido_industria: null,
      tipo_pedido: 0,
      redespacho_id: null,
      transportadora_id: Number(transpoId),
      created_at: null,
      updated_at: null,
      representante_id: Number(representativeId),
      situacao_cod: Number(situacaoCod),
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
        response.data.pedidoItens[0].data_entrega,
        response.data.situacao,
        response.data.pedidoItens
      )
    );
    const response2 = yield call(api.get, `/pedido/${response.data.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    yield put(
      priceTotal(
        response2.data.valor_total_pedido,
        response2.data.quantidade_pares_total
      )
    );
    yield put(commonActionSucess());
  } catch (err) {
    yield put(commonActionFailure('Erro ao Gravar o pedido'));
  }
}
function* handleOrderSaga() {
  yield put(commonLoadingActivityOn());
  yield put(cleanCart());
  yield put(cleanTotal());
  yield put(cartCloseFinalize());
  yield call(AsyncStorage.removeItem, '@novaDublagem:newOrder');
  yield call(AsyncStorage.removeItem, '@novaDublagem:Products');
  navigate('Request');
}
export default all([
  takeLatest('@finalizeorder/SAVE_NEW_ORDER', saveNewOrderSaga),
  takeLatest('@finalizeorder/SAVE_ORDER_TOTAL', saveOrderTotalSaga),
  takeLatest('@finalizeorder/handleOrder', handleOrderSaga),
]);
