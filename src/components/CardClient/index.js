import React from 'react';
// import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  FlatList,
  ContainerClient,
  ConatinerCod,
  Cod,
  ContainerTotal,
  TextInfo,
  TextInfo2,
  ContainerText,
  Text,
  Info,
} from './styles';

export default function CardClient({data, functionOnpressClient}) {
  return (
    <Container>
      <FlatList
        data={data}
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ContainerText>
            <Info>Digite um dos filtros acima para ver seus clientes</Info>
          </ContainerText>
        }
        renderItem={({item}) => {
          return (
            <ContainerTotal
              onPress={() => {
                functionOnpressClient(item.id);
              }}>
              <ContainerClient>
                <ConatinerCod>
                  <Cod>
                    <TextInfo2>{item.cliente_cod}</TextInfo2>
                  </Cod>
                  <TextInfo>
                    <TextInfo2>{item.nome_razao}</TextInfo2>
                  </TextInfo>
                </ConatinerCod>
                {/* <TextInfo>
                  Endereço:
                  <TextInfo2>{item.}</TextInfo2>
                </TextInfo> */}
                <TextInfo>
                  <TextInfo2>{item.email}</TextInfo2>
                </TextInfo>
                <TextInfo>
                  <TextInfo2>{item.cnpj}</TextInfo2>
                </TextInfo>
              </ContainerClient>
            </ContainerTotal>
          );
        }}
      />
    </Container>
  );
}
CardClient.prototypes = {
  functionOnpressClient: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
};
CardClient.defaultProps = {
  data: [],
  functionOnpressClient: () => {},
};
