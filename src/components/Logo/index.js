import React from 'react';
import PropTypes from 'prop-types';
import {Container, Image, Text} from './styles';
import logo from '../../../assets/image/Logo-oficial.png';

export default function Logo({message, error}) {
  return (
    <Container>
      <Image source={logo} />
      {!!message && <Text error={error}>{message}</Text>}
    </Container>
  );
}
Logo.propTypes = {
  message: PropTypes.string,
  error: PropTypes.bool,
};
Logo.defaultProps = {
  message: '',
  error: false,
};
