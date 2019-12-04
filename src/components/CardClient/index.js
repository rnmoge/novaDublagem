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
            <Text>Digite um dos filtros acima para ver seus clientes</Text>
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
                    Cód: <TextInfo2>{item.cod}</TextInfo2>
                  </Cod>
                  <TextInfo>
                    Razão: <TextInfo2>{item.razao}</TextInfo2>
                  </TextInfo>
                </ConatinerCod>
                <TextInfo>
                  Endereço:
                  <TextInfo2>{item.rua}</TextInfo2>
                </TextInfo>
                <TextInfo>
                  Email: <TextInfo2>{item.email}</TextInfo2>
                </TextInfo>
                <TextInfo>
                  CNPJ: <TextInfo2>{item.cnpj}</TextInfo2>
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