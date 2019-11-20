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
  TextInitial,
} from './styles';
import Bojo from '../../../assets/image/3101.jpg';

export default function ListView({functionOnpressDetails, data}) {
  return (
    <Container>
      <FlatList
        initialNumToRender={10}
        ListEmptyComponent={
          <TextInitial>
            Digite um dos filtros acima para acessar o catálogo
          </TextInitial>
        }
        data={data}
        renderItem={({item}) => {
          return (
            <ContainerList>
              <Image source={Bojo} />
              <ContainerText>
                <Line>{item.Line}</Line>
                <Model>{item.Model}</Model>
              </ContainerText>
              <ContainerButton>
                <Button onPress={functionOnpressDetails(item.id)}>
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
  functionOnpressDetails: PropTypes.func,
};
ListView.defaultProps = {
  functionOnpressDetails: () => {},
};
