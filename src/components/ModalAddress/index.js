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
          <TextBold>Endereço</TextBold>
        </ContainerHeader>
        <ScrollView>
          <ContainerBody>
            <TextNormal>CEP</TextNormal>
            <InputType placeholder="CEP" />
            <TextNormal>Endereço</TextNormal>
            <InputType placeholder="Endereço" />
            <TextNormal>Número</TextNormal>
            <InputType placeholder="Número" />
            <TextNormal>Bairro</TextNormal>
            <InputType placeholder="Bairro" />
            <TextNormal>Cidade</TextNormal>
            <InputType placeholder="Cidade" />
            <TextNormal>UF</TextNormal>
            <InputType placeholder="UF" />
            <TextNormal>Complemento</TextNormal>
            <InputType placeholder="Complemento" />
            <TextNormal>Código pais</TextNormal>
            <InputType placeholder="Brasil = 1058" />
            <Radius
              text="Endereço igual para cobrança e entrega?"
              nameIcon="dot-circle"
            />
            <Button titleButton="CONFIRMAR ENDEREÇO" />
          </ContainerBody>
        </ScrollView>
      </Modal>
    </Container>
  );
}
