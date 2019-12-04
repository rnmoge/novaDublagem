import React from 'react';
// import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Container,
  ContainerBody,
  Container2,
  ContainerInput,
  ContainerText,
  TextInfo,
  ContainerButton,
  ContainerRadius,
} from './styles';
import Header from '../../components/Header';
import InputType from '../../components/InputType';
import Button from '../../components/Button';
import Radius from '../../components/Radius';
import * as ActionsOrder from '../../store/modules/order/actions';

export default function RegisterOrder() {
  // const [selectStateOne, setSelectStateOne] = useState(false);
  // const [selectStateTwo, setSelectStateTwo] = useState(false);
  // const [selectStateThree, setSelectStateThree] = useState(false);
  const dispatch = useDispatch();
  function handleDeatilsClient() {
    dispatch(ActionsOrder.handleDetailsClient());
  }
  function backOrder() {
    dispatch(ActionsOrder.backOrder());
  }
  return (
    <Container>
      <Header
        title="Seleção de cliente"
        icoName="arrow-left"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => backOrder()}
      />
      <ContainerBody>
        <Container2>
          <ContainerInput>
            <InputType placeholder="Digite a Razão Social" />
            <InputType placeholder="Digite o CNPJ" />
            <InputType placeholder="Digite o Código" />
          </ContainerInput>
          <ContainerText>
            <TextInfo>Listar clientes:</TextInfo>
          </ContainerText>
          <ContainerRadius>
            <Radius nameIcon="circle" text="Ativos" />
            <Radius nameIcon="circle" text="Inativos" />
            <Radius nameIcon="dot-circle" text="Todos" />
          </ContainerRadius>
          <ContainerButton>
            <Button
              titleButton="PESQUISAR"
              disabledButton={false}
              functionOnPress={() => {
                handleDeatilsClient();
              }}
            />
          </ContainerButton>
        </Container2>
      </ContainerBody>
    </Container>
  );
}
