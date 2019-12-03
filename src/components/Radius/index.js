import React from 'react';
// import {View} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  AreaIcon,
  Icon,
  ContainerText,
  TextInfo,
  ContainerButton,
} from './styles';

export default function Radius({text, functionOnPress, nameIcon}) {
  return (
    <Container>
      <ContainerButton>
        <AreaIcon onPress={functionOnPress}>
          <Icon name={nameIcon} />
        </AreaIcon>
        <ContainerText>
          <TextInfo>{text}</TextInfo>
        </ContainerText>
      </ContainerButton>
    </Container>
  );
}
Radius.propTypes = {
  text: PropTypes.string,
  functionOnPress: PropTypes.func,
  nameIcon: PropTypes.string,
};
Radius.defaultProps = {
  text: 'Title',
  functionOnPress: () => {},
  nameIcon: 'fonticons',
};
