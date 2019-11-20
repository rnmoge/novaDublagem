import React from 'react';
// import {View} from 'react-native';
// import PropTypes from 'prop-types';

import {
  Container,
  AreaImage,
  Image,
  AreaText,
  Line,
  Model,
  Description,
  Feacture,
  ContainerText,
} from './styles';
import Bojo from '../../../assets/image/3101.jpg';

export default function CardDetails({data}) {
  return (
    <Container>
      <AreaImage>
        <Image source={Bojo} />
      </AreaImage>
      <AreaText
        data={data}
        renderItem={({item}) => {
          return (
            <ContainerText>
              <Line>Linha: {item.line}</Line>
              <Model>Modelo: {item.model}</Model>
              <Description>Descrição: {item.description}</Description>
              <Feacture>Caracteristica: {item.feacture}</Feacture>
            </ContainerText>
          );
        }}
      />
    </Container>
  );
}
