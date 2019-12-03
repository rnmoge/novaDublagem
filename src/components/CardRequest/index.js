import React from 'react';
// import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Container, TextCard, Icon, AreaButton} from './styles';

export default function CardRequest({text, functionOnPress, nameIcon}) {
  return (
    <Container>
      <AreaButton onPress={functionOnPress}>
        <TextCard>{text}</TextCard>
        <Icon name={nameIcon} />
      </AreaButton>
    </Container>
  );
}
CardRequest.propTypes = {
  text: PropTypes.string,
  functionOnPress: PropTypes.func,
  nameIcon: PropTypes.string,
};
CardRequest.defaultProps = {
  text: 'Title button',
  functionOnPress: () => {},
  nameIcon: 'fonticons',
};
