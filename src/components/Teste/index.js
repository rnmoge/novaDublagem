import React from 'react';
// import {View} from 'react-native';

// import {Container} from './styles';
import {
  Container,
  ContainerTitle,
  Title,
  ContainerSize,
  FlatList,
  Sizes,
  Text,
  ContainerPrice,
  AreaTable,
  ContainerComission,
  Comission,
  Prices,
} from './styles';

export default function Teste({table, commision, price1, price2, price3}) {
  return (
    <Container>
      <ContainerTitle>
        <Title>Preços:</Title>
      </ContainerTitle>
      <AreaTable>
        <ContainerSize>
          <Text>Tamanhos:</Text>
        </ContainerSize>
        <ContainerPrice>
          <ContainerComission>
            <Comission>{commision.comission_1}</Comission>
          </ContainerComission>
          <ContainerComission
            data={table}
            renderItem={({item}) => {
              return <Comission>{item.comission1}</Comission>;
            }}
          />
          <FlatList
            data={price1}
            renderItem={({item}) => {
              return <Prices>{item.preco1}</Prices>;
            }}
          />
        </ContainerPrice>
        <ContainerPrice>
          <ContainerComission>
            <Comission>{commision.comission_2}</Comission>
          </ContainerComission>
          <FlatList
            data={price2}
            renderItem={({item}) => {
              return <Prices>{item.preco2}</Prices>;
            }}
          />
        </ContainerPrice>
        <ContainerPrice>
          <ContainerComission>
            <Comission>{commision.comission_3}</Comission>
          </ContainerComission>
          <FlatList
            data={price3}
            renderItem={({item}) => {
              return <Prices>{item.preco3}</Prices>;
            }}
          />
        </ContainerPrice>
      </AreaTable>
    </Container>
  );
}
