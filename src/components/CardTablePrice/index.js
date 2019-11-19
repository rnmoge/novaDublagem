import React from 'react';
// import {View} from 'react-native';

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

export default function CardTablePrice() {
  return (
    <Container>
      <ContainerTitle>
        <Title>Preços:</Title>
      </ContainerTitle>
      <AreaTable>
        <ContainerSize>
          <Text>Tamanhos:</Text>
          <FlatList
            data={[
              {id: 1, size: 'PP/38 - GG/46'},
              {id: 2, size: 'PP/38 - XG/46'},
              {id: 3, size: 'P/40 - GG/46'},
              {id: 4, size: 'M/42 - XG/48'},
              {id: 5, size: 'G/44 - GG/46'},
              {id: 6, size: 'XG/48 - EEXG/54'},
              {id: 7, size: 'XG/48 - EEXXG/54'},
            ]}
            renderItem={({item}) => {
              return <Sizes>{item.size}</Sizes>;
            }}
          />
        </ContainerSize>
        <ContainerPrice>
          <ContainerComission>
            <Comission>5,00%</Comission>
          </ContainerComission>
          <FlatList
            data={[
              {id: 1, size: '2,06'},
              {id: 2, size: '2,20'},
              {id: 3, size: '2,14'},
              {id: 4, size: '2,38'},
              {id: 5, size: '2,28'},
              {id: 6, size: '3,18'},
              {id: 7, size: '3,70'},
            ]}
            renderItem={({item}) => {
              return <Prices>{item.size}</Prices>;
            }}
          />
        </ContainerPrice>
        <ContainerPrice>
          <ContainerComission>
            <Comission>4,00%</Comission>
          </ContainerComission>
          <FlatList
            data={[
              {id: 1, size: '1,92'},
              {id: 2, size: '2,06'},
              {id: 3, size: '2,02'},
              {id: 4, size: '2,24'},
              {id: 5, size: '2,14'},
              {id: 6, size: '3,00'},
              {id: 7, size: '3,48'},
            ]}
            renderItem={({item}) => {
              return <Prices>{item.size}</Prices>;
            }}
          />
        </ContainerPrice>
        <ContainerPrice>
          <ContainerComission>
            <Comission>3,00%</Comission>
          </ContainerComission>
          <FlatList
            data={[
              {id: 1, size: '1,84'},
              {id: 2, size: '1,98'},
              {id: 3, size: '1,94'},
              {id: 4, size: '2,14'},
              {id: 5, size: '2,04'},
              {id: 6, size: '2,86'},
              {id: 7, size: '3,34'},
            ]}
            renderItem={({item}) => {
              return <Prices>{item.size}</Prices>;
            }}
          />
        </ContainerPrice>
      </AreaTable>
    </Container>
  );
}
