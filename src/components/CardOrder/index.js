import React, {useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Card,
  TextRegular,
  TextBold,
  TextInitial,
  FlatList,
  ContainerButton,
  Loading,
} from './styles';

export default function CardOrder({
  functionOnpress,
  orders,
  FunctionListFooterComponent,
  functionOnEndReached,
  loading,
}) {
  return (
    <Container>
      {loading ? (
        <Loading>
          <Text style={{fontSize: 16, fontWeight: 'bold', padding: 10}}>
            Procurando pedidos...
          </Text>
          <ActivityIndicator color="#fff000" size="large" />
        </Loading>
      ) : (
        <FlatList
          data={orders}
          showsVerticalScrollIndicator={false}
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
                    Data Emissão:
                    <TextBold>{item.emissao.substring(0, 10)}</TextBold>
                  </TextRegular>
                </Card>
              </ContainerButton>
            );
          }}
        />
      )}
    </Container>
  );
}
CardOrder.prototypes = {
  functionOnpress: PropTypes.func,
  FunctionListFooterComponent: PropTypes.func,
  functionOnEndReached: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};
CardOrder.defaultProps = {
  functionOnpress: () => {},
  FunctionListFooterComponent: () => {},
  functionOnEndReached: () => {},
  loading: false,
};
