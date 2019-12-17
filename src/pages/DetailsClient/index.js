import React, {useEffect, useState} from 'react';
import {ScrollView, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Radius from '../../components/Radius';
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
  ContainerRadius,
} from './styles';
import * as ActionsOrder from '../../store/modules/order/actions';

export default function DetailsClient() {
  const dispatch = useDispatch();
  const [selectStateOne, setSelectStateOne] = useState(true);
  const [selectStateTwo, setSelectStateTwo] = useState(false);
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
  function trocaRadius1() {
    setSelectStateOne(!selectStateOne);
    setSelectStateTwo(false);
  }
  function trocaRadius2() {
    setSelectStateTwo(!selectStateTwo);
    setSelectStateOne(false);
  }
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
              <ContainerRadius>
                <Radius
                  iconAparence={selectStateOne}
                  nameIcon={selectStateOne ? 'dot-circle' : 'circle'}
                  functionOnPress={() => {
                    trocaRadius1();
                  }}
                  text="Produção"
                />
                <Radius
                  iconAparence={selectStateTwo}
                  nameIcon={selectStateTwo ? 'dot-circle' : 'circle'}
                  functionOnPress={() => {
                    trocaRadius2();
                  }}
                  text="Pronta entrega"
                />
              </ContainerRadius>
            </ContainerClient>
          </ScrollView>
        </ContainerBody>
      )}
    </Container>
  );
}
