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
  IconAparence,
}) {
  return (
    <Container>
      <ContainerButton>
        <AreaIcon onPress={functionOnPress}>
          <Icon name={nameIcon} IconAparence={false} />
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
  IconAparence: PropTypes.bool,
};
Radius.defaultProps = {
  text: 'Title',
  functionOnPress: () => {},
  nameIcon: 'fonticons',
  IconAparence: false,
};
