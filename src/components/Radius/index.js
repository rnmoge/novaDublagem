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

export default function Radius({
  text,
  functionOnPress,
  nameIcon,
  iconAparence,
}) {
  // passwordOption={notVisiblePasswordState}
  //           keyboardTypeInput="default"
  //           areaIcon
  //           icoName={notVisiblePasswordState ? 'eye' : 'eye-slash'
  return (
    <Container>
      <ContainerButton onPress={functionOnPress}>
        <AreaIcon onPress={functionOnPress}>
          <Icon name={nameIcon} iconAparence={false} />
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
  iconAparence: PropTypes.bool,
};
Radius.defaultProps = {
  text: 'Title',
  functionOnPress: () => {},
  nameIcon: 'fonticons',
  iconAparence: false,
};
