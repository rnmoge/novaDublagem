import React from 'react';
import PropTypes from 'prop-types';
import {Container, Text, AreaIcon, Icon} from './styles';

export default function Header({title, icoName, icoSize, colorIcon}) {
  return (
    <Container>
      <AreaIcon>
        <Icon name={icoName} size={icoSize} colorIcon={colorIcon} />
      </AreaIcon>
      <Text>{title}</Text>
      <AreaIcon>
        <Icon name={icoName} size={icoSize} colorIcon={colorIcon} />
      </AreaIcon>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  icoName: PropTypes.string,
  icoSize: PropTypes.number,
  colorIcon: PropTypes.string,
};
Header.defaultProps = {
  title: 'undefield',
  icoName: 'fonticons',
  icoSize: 22,
  colorIcon: '#eeee',
};
