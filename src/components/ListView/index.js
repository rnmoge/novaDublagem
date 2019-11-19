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

export default function ListView({functionOnpresDetails, data}) {
  return (
    <Container>
      <FlatList
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
