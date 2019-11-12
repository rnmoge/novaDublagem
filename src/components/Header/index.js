import React from 'react';
import PropTypes from 'prop-types';
import {Container, Text, AreaIcon, Icon, AreaIconCart, Icon2} from './styles';

export default function Header({
  title,
  icoName,
  icoSize,
  colorIcon,
  icoName2,
  icoSize2,
}) {
  return (
    <Container>
      <AreaIcon>
        <Icon name={icoName} size={icoSize} colorIcon={colorIcon} />
      </AreaIcon>
      <Text>{title}</Text>
      <AreaIconCart>
        <Icon2 name={icoName2} size={icoSize2} colorIcon={colorIcon} />
      </AreaIconCart>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  icoName: PropTypes.string,
  icoName2: PropTypes.string,
  icoSize: PropTypes.number,
  icoSize2: PropTypes.number,
  colorIcon: PropTypes.string,
};
Header.defaultProps = {
  title: 'undefield',
  icoName: 'bars',
  icoName2: 'fonticons',
  icoSize: 22,
  icoSize2: 22,
  colorIcon: '#eeee',
};
