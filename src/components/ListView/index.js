import React from 'react';
// import {Image} from 'react-native';
// import {useSelector} from 'react-redux';
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
        data={data}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <TextInitial>
            Digite um dos filtros acima para acessar o catálogo
          </TextInitial>
        }
        renderItem={({item}) => {
          return (
            <ContainerList>
              <Image source={Bojo} />
              <ContainerText>
                <Line>{item.linha}</Line>
                <Model>{item.matriz}</Model>
              </ContainerText>
              <ContainerButton>
                <Button onPress={functionOnpressDetails}>
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
  data: PropTypes.arrayOf(PropTypes.object),
};
ListView.defaultProps = {
  functionOnpressDetails: () => {},
};
