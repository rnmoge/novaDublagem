import React from 'react';
import {Modal} from 'react-native';
import Header from '../Header';
import InputType from '../InputType';
import Button from '../Button';
import {
  Container,
  ContainerHeader,
  ContainerBody,
  ContainerDetails,
} from './styles';

export default function ModalTransport() {
  return (
    <Container>
      <Modal visible={false} animationType="slide">
        <ContainerHeader>
          <Header icoName="arrow-left" title="Transpotadora" />
        </ContainerHeader>
        <ContainerBody>
          <ContainerDetails>
            <InputType placeholder="Transportadora" />
            <InputType placeholder="Redespacho" />
          </ContainerDetails>
          <Button />
        </ContainerBody>
      </Modal>
    </Container>
  );
}
