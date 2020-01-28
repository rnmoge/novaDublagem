import React, {useState, useEffect} from 'react';
import {Modal, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import InputClick from '../InputClick';
import Header from '../Header';
import InputType from '../InputType';
import InputMask from '../InputMask';
import Button from '../Button';
import CardSize from '../CardSize';
import {Container, ContainerBody, Text} from './styles';

export default function EditOrder({
  itensExist,
  modalVisible,
  functionOnpressIconLeft,
  data,
}) {
  const [inputTypeCharge, setInputTypeCharge] = useState();
  const [inputPacking, setInputPacking] = useState();
  const [inputTablePrice, setInputTablePrice] = useState();
  const [inputPagament, setInputPagament] = useState();
  const [inputBillings, setInputBillings] = useState();
  const [inputObservacion, setInputObservacion] = useState();
  const [inputCod, setInputCod] = useState();
  const [inputLine, setInputLine] = useState();
  const [inputModel, setInputModel] = useState();
  const [inputSize, setInputSize] = useState();
  const [inputColors, setInputColors] = useState();
  const [inputComission, setInputComission] = useState();
  const [inputValue, setInputValue] = useState();
  const [inputDate, setInputDate] = useState();
  const [inputObservacionTwo, setInputObservacionTwo] = useState();
  useEffect(() => {}, []); // eslint-disable-line
  return (
    <Container>
      <Modal visible={modalVisible}>
        <Header
          icoName="times"
          title="Editar Pedido"
          functionOnpressIconLeft={() => {
            functionOnpressIconLeft();
          }}
        />
        {itensExist ? (
          <ContainerBody>
            <ScrollView>
              <InputClick
                textPrimary="Tipo de cobrança"
                textSecundary={inputTypeCharge}
                icoName="angle-down"
              />
              <InputClick
                textPrimary="Embalagem"
                textSecundary={inputPacking}
                icoName="angle-down"
              />
              <InputClick
                textPrimary="Tabela de preço"
                textSecundary={inputTablePrice}
                icoName="angle-down"
              />
              <Text>Pedido do cliente: </Text>
              <InputType
                placeholder="Ex: 0000"
                valueInputText={inputCod}
                functionOnChangeText={text => {
                  setInputCod(text);
                }}
              />
              <InputClick
                textPrimary="Condição de pagamento:"
                textSecundary={inputPagament}
                icoName="angle-down"
              />
              <Text>Observação: </Text>
              <InputType
                placeholder="Observação"
                valueInputText={inputObservacion}
                functionOnChangeText={text => {
                  setInputObservacion(text);
                }}
              />
              <InputClick
                textPrimary="Permitir faturamento antecipado"
                textSecundary={inputBillings}
                icoName="angle-down"
              />
              <Button titleButton="ATUALIZAR" />
            </ScrollView>
          </ContainerBody>
        ) : (
          <ContainerBody>
            <ScrollView>
              <InputClick
                textPrimary="Selecione a linha"
                textSecundary={inputLine}
                icoName="angle-down"
              />
              <InputClick
                textPrimary="Selecione o modelo"
                textSecundary={inputModel}
                icoName="angle-down"
              />
              <InputClick
                textPrimary="Selecione o grupo de tamanho"
                textSecundary={inputSize}
                icoName="angle-down"
              />
              <InputClick
                textPrimary="Selecione a cor"
                textSecundary={inputColors}
                icoName="angle-down"
              />
              <CardSize nameIcon="minus" nameIcon2="plus" />
              <Text>Comissão: </Text>
              <InputType
                placeholder="Comissão"
                valueInputText={inputComission}
                functionOnChangeText={text => {
                  setInputComission(text);
                }}
              />
              <Text>Valor Real: </Text>
              <InputType
                placeholder="Valor Real"
                valueInputText={inputValue}
                functionOnChangeText={text => {
                  setInputValue(text);
                }}
              />

              <Text>Data entrega: </Text>
              <InputMask
                placeholder="Data entrega"
                valueInput={inputDate}
                onChangeText={text => {
                  setInputDate(text);
                }}
              />

              <Text>Observação: </Text>
              <InputType
                placeholder="Observação"
                valueInputText={inputObservacionTwo}
                functionOnChangeText={text => {
                  setInputObservacionTwo(text);
                }}
              />
              <Button />
            </ScrollView>
          </ContainerBody>
        )}
      </Modal>
    </Container>
  );
}
EditOrder.propTypes = {
  modalVisible: PropTypes.bool,
  itensExist: PropTypes.bool,
  functionOnpressIconLeft: PropTypes.func,
};
EditOrder.defaultProps = {
  modalVisible: true,
  itensExist: false,
  functionOnpressIconLeft: () => {},
};
