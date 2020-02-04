import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
import api from '../../../services/api';
import {
  requestOrdersSucess,
  selectOrderSucess,
  dateBillingSucess,
  setpageState,
  openModal,
  setLastPage,
} from './actions';
import {
  commonLoadingActivityOn,
  commonActionFailure,
  commonActionSucess,
} from '../common/actions';
import {reponseApi, priceTotal} from '../finalizeorder/actions';
import {navigate} from '../../../services/navigation';

function* requestOrdersSaga(action) {
  yield put(commonLoadingActivityOn());
  let user = yield call(AsyncStorage.getItem, '@novaDublagem:user');
  user = JSON.parse(user);
  const {page, input, dataStateAux} = action.payload;
  const idRepre = user.cliente.id;

  // pedidorepre?representante=7
  // /pedidorepre?representante=${idRepre}&page=${page}&pageSize=20
  try {
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);
    const {data} = yield call(
      api.get,
      `/pedidorepre?representante=${idRepre}&nomerazao=${input}&page=${page}&pageSize=20`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const {data: orders} = data;
    const newOrders = [];
    const newArray = [...dataStateAux];
    // const compare = [];
    for (let i = 0; i < orders.length; i += 1) {
      const {
        id,
        pedido_cod: pedidoCod,
        emissao,
        situacao: situacaoCod,
      } = orders[i];
      const {nome_razao: nomeRazao, cnpj} = orders[i].cliente;
      const order2 = {
        id,
        nomeRazao,
        cnpj,
        pedidoCod,
        emissao,
        situacaoCod,
      };
      newOrders.push(order2);
      newArray.push(order2);
    }
    const totalPages = data.lastPage;

    if (page <= totalPages) {
      const newPage = page + 1;
      yield put(setpageState(newPage));
      yield put(setLastPage(totalPages));
      yield put(requestOrdersSucess(newArray));
      yield put(commonActionSucess());
    }
    yield put(commonActionSucess());
  } catch (err) {
    yield put(commonActionFailure());
  }
}
function* selectOrderSaga(action) {
  yield put(commonLoadingActivityOn());
  navigate('DetailsOrder');
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);
  try {
    const {id} = action.payload;

    const data = yield call(api.get, `/pedido/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const idProduct = data.data.pedidoItens[0].linhamatriz.id;

    yield put(selectOrderSucess(data.data));

    const newArray = data.data;

    const {condicaoPagamento} = newArray;

    const newOrder = {condicaoPagamento};

    yield put(commonLoadingActivityOn());

    const billingDate = yield call(
      api.get,
      `datafaturamento?linhaMatrizId=${idProduct}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(dateBillingSucess(billingDate.data.data_faturamento));
    yield put(commonLoadingActivityOn());
    yield put(commonActionSucess());
  } catch (err) {
    yield put(commonActionFailure());
  }
}

function* backQueryOrderSaga() {
  yield put(commonLoadingActivityOn());
  navigate('QueryOrder');
}
function* copyOrderSaga(action) {
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);
  const {
    pedidoCod,
    dateBilling,
    order,
    emission,
    specialPrice,
  } = action.payload;
  const {
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
    tipo_pedido,
    redespacho_id,
    transportadora_id,
    representante_id,
    situacao_cod,
    pedidoItens,
  } = order;

  try {
    yield put(commonLoadingActivityOn(''));
    navigate('FinalOrder');

    const newProducts = [];
    for (let i = 0; i < pedidoItens.length; i += 1) {
      const pedidoItemTamanhos = [];

      for (let j = 0; j < pedidoItens[i].pedidoItemTamanhos.length; j += 1) {
        const {tamanho_id, tamanho_cod, quantidade} = pedidoItens[
          i
        ].pedidoItemTamanhos[j];
        const pedidoItemTamanhos2 = {
          tamanho_id: Number(tamanho_id),
          tamanho_cod,
          quantidade: Number(quantidade),
        };
        pedidoItemTamanhos.push(pedidoItemTamanhos2);
      }
      const {
        linha_matriz_id,
        valor_real,
        observacao_item,
        comissao,
        cor_id,
        grupotamanho_id,
      } = pedidoItens[i];

      const pedidoItens2 = {
        pedido_cod: pedidoCod,
        linha_matriz_id: Number(linha_matriz_id),
        valor_real,
        observacao_item,
        comissao,
        data_entrega: dateBilling,
        preco_especial: specialPrice,
        cor_id: Number(cor_id),
        grupotamanho_id: Number(grupotamanho_id),
        pedidoItemTamanhos,
      };
      newProducts.push(pedidoItens2);
    }
    const data2 = {
      embalagem_id,
      condicao_pagamento_id,
      tipo_cobranca_id,
      tabela_preco_id,
      cliente_id,
      emissao: emission,
      pedido_cod: pedidoCod,
      observacao,
      taxa_cotacao,
      antecipa_faturamento,
      desconto_percent,
      tipo_frete,
      pedido_industria: null,
      tipo_pedido,
      redespacho_id,
      transportadora_id,
      created_at: null,
      updated_at: null,
      representante_id,
      situacao_cod,
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

function* dateBillingSaga(action) {
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);
  const {idProduct} = action.payload;
  yield put(commonLoadingActivityOn(''));
  try {
    const billingDate = yield call(
      api.get,
      `datafaturamento?linhaMatrizId=292`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    yield put(commonActionSucess());
    // yield put(billingDateSucess(billingDate.data.data_faturamento));
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}

function* saveOrderTransmitSaga(action) {
  yield put(commonLoadingActivityOn(''));
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);
  const {order} = action.payload;
  const {
    id,
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
    tipo_pedido,
    redespacho_id,
    transportadora_id,
    representante_id,
    situacao_cod,
    created_at,
    updated_at,
    usuario_cadastro,
    pedidoItens,
  } = order;
  try {
    yield put(commonLoadingActivityOn(''));

    const newProducts = [];
    for (let i = 0; i < pedidoItens.length; i += 1) {
      const pedidoItemTamanhos = [];

      for (let j = 0; j < pedidoItens[i].pedidoItemTamanhos.length; j += 1) {
        const {
          id,
          pedidos_item_id,
          tamanho_id,
          tamanho_cod,
          quantidade,
          sequencia_item,
          data_faturamento,
          created_at,
          updated_at,
        } = pedidoItens[i].pedidoItemTamanhos[j];
        const pedidoItemTamanhos2 = {
          id,
          pedidos_item_id,
          tamanho_id: Number(tamanho_id),
          created_at,
          updated_at,
          tamanho_cod,
          quantidade: Number(quantidade),
          sequencia_item,
          data_faturamento,
        };
        pedidoItemTamanhos.push(pedidoItemTamanhos2);
      }
      const {
        id,
        pedido_id,
        linha_matriz_id,
        linha_cod,
        matriz_cod,
        grupo_tamanho_cod,
        cor_cod,
        valor_real,
        observacao_item,
        comissao,
        cor_id,
        grupotamanho_id,
        data_entrega,
        preco_especial,
        quantidade_item_total,
        preco_item_total,
        created_at,
        updated_at,
      } = pedidoItens[i];

      const pedidoItens2 = {
        id,
        pedido_id,
        linha_matriz_id: Number(linha_matriz_id),
        cor_id: Number(cor_id),
        grupotamanho_id: Number(grupotamanho_id),
        linha_cod,
        matriz_cod,
        pedido_cod,
        cor_cod,
        grupo_tamanho_cod,
        observacao_item,
        valor_real,
        comissao,
        created_at,
        updated_at,
        preco_especial: Number(preco_especial),
        data_entrega,
        quantidade_item_total,
        preco_item_total,
        pedidoItemTamanhos,
      };
      newProducts.push(pedidoItens2);
    }
    const data2 = {
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
      pedido_industria: 0,
      tipo_pedido: null,
      redespacho_id,
      transportadora_id,
      created_at,
      updated_at,
      representante_id,
      situacao_cod: 7,
      usuario_cadastro,
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

    const response = yield call(api.put, `/pedido/${id}`, data2, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // yield put(
    //   reponseApi(
    //     response.data.id,
    //     response.data.cliente.nome_razao,
    //     response.data.tabelaPreco.tabelapreco,
    //     response.data.tipoCobranca.descricao,
    //     response.data.condicaoPagamento.descricao,
    //     response.data.pedidoItens[0].data_entrega,
    //     response.data.situacao,
    //     response.data.pedidoItens
    //   )
    // );
    const response2 = yield call(api.get, `/pedido/${response.data.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(selectOrderSucess(response2.data));
    // yield put(
    //   priceTotal(
    //     response2.data.valor_total_pedido,
    //     response2.data.quantidade_pares_total
    //   )
    // );
    yield put(commonActionSucess());
    yield put(openModal(true));
    // yield put(billingDateSucess(billingDate.data.data_faturamento));
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}

export default all([
  takeLatest('@queryorder/BACK_QUERY_ORDER', backQueryOrderSaga),
  takeLatest('@queryorder/SELECT_ORDER', selectOrderSaga),
  takeLatest('@queryorder/REQUEST_ORDERS', requestOrdersSaga),
  takeLatest('@queryorder/COPY_ORDER', copyOrderSaga),
  takeLatest('@queryorder/DATE_BILLING', dateBillingSaga),
  takeLatest('@queryorder/SAVE_ORDER_TRANSMIT', saveOrderTransmitSaga),
]);
