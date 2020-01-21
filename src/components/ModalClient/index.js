import React from 'react';
import {Modal, ScrollView} from 'react-native';
import InputType from '../InputType';
import Button from '../Button';
import Radius from '../Radius';
import {TextNormal, TextRegular, TextBold} from '../../styles/fonts';
import {
  Container,
  ContainerHeader,
  AreaIcon,
  Icon,
  ContainerBody,
} from './styles';

export default function ModalAddress() {
  return (
    <Container>
      <Modal visible={false} animationType="slide">
        <ContainerHeader>
          <AreaIcon onPress={() => {}}>
            <Icon name="times" />
          </AreaIcon>
          <TextBold>Cliente</TextBold>
        </ContainerHeader>
        <ScrollView>
          <ContainerBody>
            <TextBold>Cliente 1</TextBold>
            <TextNormal>Razão Social</TextNormal>
            <InputType placeholder="Razão Social" />
            <TextNormal>Telefone</TextNormal>
            <InputType placeholder="Telefone" />
            <TextNormal>Compra Mensal</TextNormal>
            <InputType placeholder="Compra Mensal" />
            <TextBold>Cliente 2</TextBold>
            <TextNormal>Razão Social</TextNormal>
            <InputType placeholder="Razão Social" />
            <TextNormal>Telefone</TextNormal>
            <InputType placeholder="Telefone" />
            <TextNormal>Compra Mensal</TextNormal>
            <InputType placeholder="Compra Mensal" />
            <TextBold>Cliente 3</TextBold>
            <TextNormal>Razão Social</TextNormal>
            <InputType placeholder="Razão Social" />
            <TextNormal>Telefone</TextNormal>
            <InputType placeholder="Telefone" />
            <TextNormal>Compra Mensal</TextNormal>
            <InputType placeholder="Compra Mensal" />

            <Button titleButton="CONFIRMAR" />
          </ContainerBody>
        </ScrollView>
      </Modal>
    </Container>
  );
}
