import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';
import {Container, ButtonArea, Text} from './styles';

export default function ButtonSecondary({
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
ButtonSecondary.propTypes = {
  titleButton: PropTypes.string,
  disabledButton: PropTypes.bool,
  loading: PropTypes.bool,
  functionOnPress: PropTypes.func,
};
ButtonSecondary.defaultProps = {
  titleButton: 'Title button',
  functionOnPress: () => {},
  disabledButton: true,
  loading: false,
};
