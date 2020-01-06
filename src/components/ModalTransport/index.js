import React, {useState} from 'react';
import {Modal} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import InputClick from '../InputClick';
import Button from '../Button';
import {
  Container,
  ContainerHeader,
  ContainerBody,
  ContainerHeader2,
  AreaIcon,
  Icon,
  Input,
} from './styles';

export default function ModalTransport({
  nameIcon,
  functionOnPressRight,
  functionOnChangeText,
  nameIconTwo,
  functionOnpressIcon,
}) {
  const [transState, setTransState] = useState(false);
  function Transport() {
    setTransState(true);
  }
  return (
    <Container>
      <Modal visible animationType="slide">
        <ContainerHeader>
          <Header
            icoName="arrow-left"
            title="Transpotadora"
            functionOnpressIconLeft={() => {
              functionOnpressIcon();
            }}
          />
        </ContainerHeader>
        <ContainerBody>
          <InputClick
            textPrimary="Transportadora"
            textSecundary="Nome da empresa"
            functionOnpressInput={() => {
              Transport();
            }}
          />
          <InputClick
            textPrimary="Redespacho"
            textSecundary="Nome da empresa"
            functionOnpressInput={() => {
              Transport();
            }}
          />
          <Button titleButton="CONFIRMAR" />
        </ContainerBody>
      </Modal>
      <Modal visible={transState} animationType="slide">
        <ContainerHeader2>
          <AreaIcon
            onPress={() => {
              setTransState(!transState);
            }}>
            <Icon name={nameIcon} />
          </AreaIcon>
          <Input
            placeholder="Nome da empresa"
            onChangeText={text => functionOnChangeText(text)}
          />
          <AreaIcon onPress={functionOnPressRight}>
            <Icon name={nameIconTwo} />
          </AreaIcon>
        </ContainerHeader2>
      </Modal>
    </Container>
  );
}
ModalTransport.propTypes = {
  placeholder: PropTypes.string,
  nameIcon: PropTypes.string,
  nameIconTwo: PropTypes.string,
  functionOnPressLeft: PropTypes.func,
  functionOnPressRight: PropTypes.func,
  functionOnChangeText: PropTypes.func,
  functionOnpressIcon: PropTypes.func,
  // loading: PropTypes.bool,
};
ModalTransport.defaultProps = {
  nameIcon: 'times',
  nameIconTwo: 'search',
  placeholder: 'TesteModal',
  // modalVisible: false,
  functionOnPressLeft: () => {},
  functionOnPressRight: () => {},
  functionOnChangeText: () => {},
  functionOnpressIcon: () => {},
  // loading: false,
};
