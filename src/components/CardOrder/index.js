import React from 'react';
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
          listEmptyComponent={
            <TextInitial>Você não possui este pedido</TextInitial>
          }
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={false}
          // listFooterComponent={FunctionListFooterComponent}
          onEndReached={functionOnEndReached}
          renderItem={({item}) => {
            return (
              <ContainerButton
                onPress={() => {
                  functionOnpress(item.id);
                }}>
                <Card>
                  <TextBold>{item.nomeRazao}</TextBold>
                  <TextRegular>
                    CNPJ: <TextBold>{item.cnpj}</TextBold>
                  </TextRegular>
                  <TextRegular>
                    Cod. pedido: <TextBold>{item.pedidoCod}</TextBold>
                  </TextRegular>
                  <TextRegular>
                    Data Emissão:
                    <TextBold>{item.emissao}</TextBold>
                  </TextRegular>
                  <TextRegular>
                    Situação:
                    <TextBold> {item.situacaoCod}</TextBold>
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
  orders: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};
CardOrder.defaultProps = {
  functionOnpress: () => {},
  FunctionListFooterComponent: () => {},
  functionOnEndReached: () => {},
  loading: false,
};
