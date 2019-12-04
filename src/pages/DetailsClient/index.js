import React from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ButtonSecundary from '../../components/ButtonSecondary';
import DetailsClient1 from '../../components/DetailsClient';
// import InputType from '../../components/InputType';
import {
  Container,
  ContainerBody,
  ContainerRepresentante,
  ContainerUser,
  ContainerClient,
  TextInfo,
  TextUser,
  ContainerTotal,
  ContainerButton,
} from './styles';
import * as ActionsOrder from '../../store/modules/order/actions';

export default function DetailsClient() {
  const dispatch = useDispatch();
  function backRegisterOrder() {
    dispatch(ActionsOrder.backRegisterOrder());
  }
  const {username} = useSelector(state => state.menu);
  const {data} = useSelector(state => state.order);
  return (
    <Container>
      <Header
        title="Consulta Cliente"
        icoName="arrow-left"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => {
          backRegisterOrder();
        }}
      />
      <ContainerBody>
        <ContainerRepresentante>
          <TextInfo>Representante:</TextInfo>
          <ContainerUser>
            <TextUser>{username}</TextUser>
          </ContainerUser>
        </ContainerRepresentante>
        <ContainerClient>
          <DetailsClient1 client={data} />
          <ContainerTotal>
            <ContainerButton>
              <Button titleButton="NOVO PEDIDO" disabledButton={false} />
            </ContainerButton>
            <ContainerButton>
              <Button titleButton="PEDIDOS ANTERIOR" disabledButton={false} />
            </ContainerButton>
          </ContainerTotal>
        </ContainerClient>
      </ContainerBody>
    </Container>
  );
}
