import React from 'react';
import {
  Container,
  ContainerAvatar,
  TextAvatar,
  ContainerUser,
  ContainerName,
  TextName,
  ContainerEmail,
  TextEmail,
} from './styles';

const HeaderDrawer = () => (
  <Container>
    <ContainerAvatar>
      <TextAvatar>U</TextAvatar>
    </ContainerAvatar>
    <ContainerUser>
      <ContainerName>
        <TextName>USER_TESTE</TextName>
      </ContainerName>
      <ContainerEmail>
        <TextEmail>user@email.com</TextEmail>
      </ContainerEmail>
    </ContainerUser>
  </Container>
);
export default HeaderDrawer;
