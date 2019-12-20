import React from 'react';
import {Modal} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../Button';
import {
  Container,
  ContainerTotal,
  ContainerBody,
  TextInfo,
  AreaIcon,
  Icon,
  ContainerText,
  ContainerIcon,
} from './styles';

export default function ModalInfo({
  text,
  nameIcon,
  modalVisible,
  functionOnPressText,
}) {
  return (
    <Container>
      <Modal visible={modalVisible} transparent animationType="slide">
        <ContainerTotal>
          <ContainerBody>
            <ContainerText>
              <TextInfo>{text}</TextInfo>
            </ContainerText>
            <ContainerIcon>
              <AreaIcon>
                <Icon name={nameIcon} />
              </AreaIcon>
            </ContainerIcon>
            <Button
              disabledButton={false}
              titleButton="OK"
              functionOnPress={() => {
                functionOnPressText();
              }}
            />
          </ContainerBody>
        </ContainerTotal>
      </Modal>
    </Container>
  );
}
ModalInfo.propTypes = {
  nameIcon: PropTypes.string,
  text: PropTypes.string,
  modalVisible: PropTypes.bool,
  functionOnPressText: PropTypes.func,
};
ModalInfo.defaultProps = {
  nameIcon: 'check-circle',
  text: 'DEU CERTO',
  modalVisible: true,
  functionOnPressText: () => {},
};
