import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';
import {Container, ButtonArea, Text} from './styles';

export default function Button({
  titleButton,
  functionOnPress,
  disabledButton,
  loading,
}) {
  return (
    <Container>
      <ButtonArea onPress={functionOnPress} disabled={disabledButton}>
        {loading ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Text>{titleButton}</Text>
        )}
      </ButtonArea>
    </Container>
  );
}
Button.propTypes = {
  titleButton: PropTypes.string,
  disabledButton: PropTypes.bool,
  loading: PropTypes.bool,
  functionOnPress: PropTypes.func,
};
Button.defaultProps = {
  titleButton: 'Title button',
  functionOnPress: () => {},
  disabledButton: true,
  loading: false,
};
