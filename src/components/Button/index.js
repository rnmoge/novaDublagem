import React from 'react';
import PropTypes from 'prop-types';
// import {ActivityIndicator} from 'react-native';
import {Container, ButtonArea, Text} from './styles';

export default function Button({
  // icoName,
  // icoSize,
  titleButton,
  functionOnPress,
  // disabledButton,
  // loading,
  // IcoPosition,
}) {
  return (
    <Container>
      <ButtonArea onPress={functionOnPress}>
        <Text>{titleButton}</Text>
      </ButtonArea>
    </Container>
  );
}
Button.propTypes = {
  // icoName: PropTypes.string,
  // icoSize: PropTypes.number,
  titleButton: PropTypes.string,
  // disabledButton: PropTypes.bool,
  // loading: PropTypes.bool,
  // IcoPosition: PropTypes.string,
  functionOnPress: PropTypes.func,
};
Button.defaultProps = {
  // icoName: 'fonticons',
  // icoSize: 22,
  titleButton: 'Title button',
  functionOnPress: () => {},
  // disabledButton: false,
  // loading: false,
  // IcoPosition: 'left',
};
