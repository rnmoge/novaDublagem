import React from 'react';
import {ScrollView, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import ItensOrder from '../../components/ItensOrder';
import Details from '../../components/DetailsOrder';
import {Container, ContainerBody} from './styles';
import * as ActionsQuery from '../../store/modules/queryorder/actions';

export default function DetailsOrder() {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.common);
  const {order} = useSelector(state => state.queryorder);
  console.tron.log(order);
  function backQueryOrder() {
    dispatch(ActionsQuery.backQueryOrder());
  }

  return (
    <Container>
      <Header
        title="Detalhes Pedido"
        icoName="arrow-left"
        functionOnpressIconLeft={() => {
          backQueryOrder();
        }}
      />
      {loading ? (
        <ActivityIndicator
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          size="large"
          color="#fff000"
        />
      ) : (
        <ScrollView>
          <ContainerBody>
            <Details data={order} />
            <ItensOrder data={order.pedidoItens} />
          </ContainerBody>
        </ScrollView>
      )}
    </Container>
  );
}
