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
  ListFooterComponent,
  functionOnEndReached,
  functionOnLongOnPress,
  loading,
}) {
  return (
    <Container>
      <FlatList
        key="list"
        data={orders}
        keyExtractor={item => String(item.id)}
        listEmptyComponent={
          <TextInitial>Você não possui este pedido</TextInitial>
        }
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          loading && (
            <ActivityIndicator
              color="#000"
              size="small"
              style={{marginTop: 30}}
            />
          )
        }
        onEndReached={() => {
          functionOnEndReached();
        }}
        renderItem={({item}) => {
          return (
            <ContainerButton
              onLongPress={() => {
                functionOnLongOnPress();
              }}
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
    </Container>
  );
}
CardOrder.prototypes = {
  functionOnpress: PropTypes.func,
  functionOnLongOnPress: PropTypes.func,
  FunctionListFooterComponent: PropTypes.func,
  functionOnEndReached: PropTypes.func,
  orders: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};
CardOrder.defaultProps = {
  functionOnpress: () => {},
  functionOnLongOnPress: () => {},
  FunctionListFooterComponent: () => {},
  functionOnEndReached: () => {},
  loading: false,
};
