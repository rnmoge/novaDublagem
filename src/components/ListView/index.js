import React from 'react';
// import {Image} from 'react-native';
// import PropTypes from 'prop-types';
import {
  Container,
  Line,
  FlatList,
  ContainerList,
  Model,
  Image,
  ContainerText,
  Button,
  ContainerButton,
  Text,
} from './styles';

export default function ListView() {
  return (
    <Container>
      <FlatList
        data={[
          {id: 1, Line: 'Linha: P.U', Model: 'Modelo: 3101'},
          {id: 2, Line: 'Linha: P.U', Model: 'Modelo: 3101'},
          {id: 3, Line: 'Linha: P.U', Model: 'Modelo: 3101'},
          {id: 4, Line: 'Linha: P.U', Model: 'Modelo: 3101'},
          {id: 5, Line: 'Linha: P.U', Model: 'Modelo: 3101'},
          {id: 6, Line: 'Linha: P.U', Model: 'Modelo: 3101'},
          {id: 7, Line: 'Linha: P.U', Model: 'Modelo: 3101'},
        ]}
        renderItem={({item}) => {
          return (
            <ContainerList>
              <Image />
              <ContainerText>
                <Line>{item.Line}</Line>
                <Model>{item.Model}</Model>
              </ContainerText>
              <ContainerButton>
                <Button>
                  <Text>VER DETALHES</Text>
                </Button>
              </ContainerButton>
            </ContainerList>
          );
        }}
      />
    </Container>
  );
}
