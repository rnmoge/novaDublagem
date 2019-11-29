import React from 'react';
// import {View} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
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
  const {username, permission} = useSelector(state => state.menu);
  return (
    <Container>
      <AreaImage>
        <Image source={Bojo} />
      </AreaImage>
      <AreaText>
        <ContainerText>
          <Line>Linha: {username}</Line>
          <Model>Modelo: {username}</Model>
          <Description>Descrição: {username}</Description>
          <Feacture>Caracteristica: {username}</Feacture>
        </ContainerText>
      </AreaText>
    </Container>
  );
}
CardDetails.prototypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
CardDetails.defaultProps = {};
