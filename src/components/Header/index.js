import React from 'react';
import PropTypes from 'prop-types';
import {Container, Text, AreaIcon, Icon, AreaIconCart} from './styles';

export default function Header({
  title,
  icoName,
  icoSize,
  colorIcon,
  icoNameTwo,
  button,
  cartExist,
  functionOnpressIconLeft,
  functionOnpressIconRigth,
}) {
  return (
    <Container>
      {button ? (
        <AreaIcon positionIcon="flex-start" onPress={functionOnpressIconLeft}>
          <Icon name={icoName} size={icoSize} colorIcon={colorIcon} />
        </AreaIcon>
      ) : (
        <AreaIcon positionIcon="flex-start" onPress={functionOnpressIconLeft}>
          <Icon name={icoName} size={icoSize} colorIcon={colorIcon} />
        </AreaIcon>
      )}
      <Text>{title}</Text>
      {cartExist ? (
        <AreaIconCart
          positionIcon="flex-end"
          onPress={functionOnpressIconRigth}>
          <Icon name={icoNameTwo} size={icoSize} colorIcon={colorIcon} />
        </AreaIconCart>
      ) : null}
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  icoName: PropTypes.string,
  icoNameTwo: PropTypes.string,
  icoSize: PropTypes.number,
  colorIcon: PropTypes.string,
  button: PropTypes.bool,
  cartExist: PropTypes.bool,
  functionOnpressIconLeft: PropTypes.func,
  functionOnpressIconRigth: PropTypes.func,
};
Header.defaultProps = {
  title: '',
  icoName: 'bars',
  icoNameTwo: 'fonticons',
  icoSize: 22,
  colorIcon: '#eeee',
  button: false,
  cartExist: true,
  functionOnpressIconLeft: () => {},
  functionOnpressIconRigth: () => {},
};
