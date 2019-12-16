import React, {useEffect, useState} from 'react';
import {ScrollView, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import Button from '../../components/Button';
// import ButtonSecundary from '../../components/ButtonSecondary';
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
  const {username} = useSelector(state => state.menu);
  const {loading} = useSelector(state => state.common);
  const {data, address} = useSelector(state => state.order);
  console.tron.log(address);
  const [stateUsername, setStateUsername] = useState(username);
  function backRegisterOrder() {
    dispatch(ActionsOrder.backRegisterOrder());
  }
  function handleNewOrder() {
    dispatch(ActionsOrder.handleNewOrder());
  }
  useEffect(() => {
    setStateUsername(username);
  }, [username]);
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
      {loading ? (
        <ActivityIndicator
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          size="large"
          color="#fff000"
        />
      ) : (
        <ContainerBody>
          <ContainerRepresentante>
            <TextInfo>Representante:</TextInfo>
            <ContainerUser>
              <TextUser>{stateUsername}</TextUser>
            </ContainerUser>
          </ContainerRepresentante>
          <ScrollView indicatorStyle="white">
            <ContainerClient>
              <DetailsClient1 client={data} address={address} />
              <ContainerTotal>
                <ContainerButton>
                  <Button
                    titleButton="NOVO PEDIDO"
                    disabledButton={false}
                    functionOnPress={() => {
                      handleNewOrder();
                    }}
                  />
                  <Button
                    titleButton="PEDIDOS ANTERIOR"
                    disabledButton={false}
                  />
                </ContainerButton>
              </ContainerTotal>
            </ContainerClient>
          </ScrollView>
        </ContainerBody>
      )}
    </Container>
  );
}
