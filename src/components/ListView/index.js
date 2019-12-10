import React from 'react';
// import {Image} from 'react-native';
import {useSelector} from 'react-redux';
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
// import Bojo from '../../../assets/image/3101.jpg';

export default function ListView({functionOnpressDetails, data}) {
  const {descricao1} = useSelector(state => state.catalog);
  console.tron.log(descricao1);
  return (
    <Container>
      <FlatList
        data={data}
        initialNumToRender={10}
        ListEmptyComponent={
          <TextInitial>
            Digite um dos filtros acima para acessar o catálogo
          </TextInitial>
        }
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <ContainerList>
              <Image source={{uri: item.imageUrl}} />
              <ContainerText>
                <Line>{item.linha}</Line>
                <Model>{item.matriz}</Model>
              </ContainerText>
              <ContainerButton>
                <Button onPress={() => functionOnpressDetails(item.id)}>
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
