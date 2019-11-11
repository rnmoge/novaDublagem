import React from 'react';
import PropTypes from 'prop-types';
import {Container, Text} from './styles';

export default function Header({title}) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};
Header.defaultProps = {
  title: 'undefield',
};
