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
  ContainerSnack,
  TextButton,
  ContainerButton,
} from './styles';

export default function ModalUpdate({
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
            <ContainerSnack>
              <ContainerText>
                <TextInfo>{text}</TextInfo>
              </ContainerText>
              <ContainerButton>
                <TextButton
                  onPress={() => {
                    functionOnPressText();
                  }}>
                  OK
                </TextButton>
              </ContainerButton>
            </ContainerSnack>
            {/* <ContainerIcon>
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
            /> */}
          </ContainerBody>
        </ContainerTotal>
      </Modal>
    </Container>
  );
}
ModalUpdate.propTypes = {
  nameIcon: PropTypes.string,
  text: PropTypes.string,
  modalVisible: PropTypes.bool,
  functionOnPressText: PropTypes.func,
};
ModalUpdate.defaultProps = {
  nameIcon: 'check-circle',
  text: 'DEU CERTO',
  modalVisible: true,
  functionOnPressText: () => {},
};
