import React, {useState} from 'react';
// import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Card,
  TextRegular,
  TextBold,
  TextInitial,
  FlatList,
  ContainerButton,
} from './styles';

export default function CardOrder({
  functionOnpress,
  orders,
  FunctionListFooterComponent,
  functionOnEndReached,
}) {
  return (
    <Container>
      <FlatList
        ListEmptyComponent={
          <TextInitial>Digite um dos filtros para buscar um pedido</TextInitial>
        }
        data={orders}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        listFooterComponent={FunctionListFooterComponent}
        onEndReached={functionOnEndReached}
        renderItem={({item}) => {
          return (
            <ContainerButton
              onPress={() => {
                functionOnpress(item.id);
              }}>
              <Card>
                <TextBold>{item.cliente.nome_razao}</TextBold>
                <TextRegular>
                  CNPJ: <TextBold>{item.cliente.cnpj}</TextBold>
                </TextRegular>
                <TextRegular>
                  Cod. pedido: <TextBold>{item.pedido_cod}</TextBold>
                </TextRegular>
                <TextRegular>
                  Data Emissão:{' '}
                  <TextBold>{item.emissao.substring(0, 10)}</TextBold>
                </TextRegular>
              </Card>
            </ContainerButton>
          );
        }}
      />
    </Container>
  );
}
CardOrder.prototypes = {
  functionOnpress: PropTypes.func,
  FunctionListFooterComponent: PropTypes.func,
  functionOnEndReached: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
};
CardOrder.defaultProps = {
  functionOnpress: () => {},
  FunctionListFooterComponent: () => {},
  functionOnEndReached: () => {},
};
