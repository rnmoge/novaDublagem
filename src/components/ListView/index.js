import React from 'react';
// import {Image} from 'react-native';
import PropTypes from 'prop-types';
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
import Bojo from '../../../assets/image/3101.jpg';

export default function ListView({functionOnpresDetails}) {
  return (
    <Container>
      <FlatList
        data={[
          {id: 1, Line: 'Linha: P.U', Model: 'Modelo: 3101'},
          {id: 2, Line: 'Linha: P.U', Model: 'Modelo: 3105'},
          {id: 3, Line: 'Linha: P.U', Model: 'Modelo: 3106'},
          {id: 4, Line: 'Linha: P.U', Model: 'Modelo: 3107'},
          {id: 5, Line: 'Linha: P.U', Model: 'Modelo: 3108'},
          {id: 6, Line: 'Linha: P.U', Model: 'Modelo: 3109'},
          {id: 7, Line: 'Linha: P.U', Model: 'Modelo: 3111'},
        ]}
        renderItem={({item}) => {
          return (
            <ContainerList>
              <Image source={Bojo} />
              <ContainerText>
                <Line>{item.Line}</Line>
                <Model>{item.Model}</Model>
              </ContainerText>
              <ContainerButton>
                <Button onPress={functionOnpresDetails}>
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
ListView.prototypes = {
  functionOnpresDetails: PropTypes.func,
};
ListView.defaultProps = {
  functionOnpresDetails: () => {},
};
