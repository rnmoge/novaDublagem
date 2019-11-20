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

export default function CardTablePrice({data}) {
  return (
    <Container>
      <ContainerTitle>
        <Title>Preços:</Title>
      </ContainerTitle>
      <AreaTable>
        <ContainerSize>
          <Text>Tamanhos:</Text>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return <Sizes>{item.size}</Sizes>;
            }}
          />
        </ContainerSize>
        <ContainerPrice>
          <ContainerComission
            data={data}
            renderItem={({item}) => {
              return <Comission>{item.comission1}</Comission>;
            }}
          />
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
