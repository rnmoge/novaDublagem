import React from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  TextFooter,
  AreaIcon,
  Icon,
  TextVesion,
  ContainerExit,
  ContainerVersion,
} from './styles';
// import {navigate} from '../../services/navigation';
import * as exitDrawerActions from '../../store/modules/exitdrawer/actions';

export default function FooterDrawer() {
  const dispatch = useDispatch();
  function handleExit() {
    dispatch(exitDrawerActions.exitAplication());
  }
  return (
    <Container onPress={() => handleExit()}>
      <AreaIcon>
        <Icon
          name="times"
          size={25}
          colorIcon="#263238"
          onPress={() => handleExit()}
        />
      </AreaIcon>
      <ContainerExit>
        <TextFooter onPress={() => handleExit()}>Sair</TextFooter>
      </ContainerExit>
      <ContainerVersion>
        <TextVesion>V1.0.3</TextVesion>
      </ContainerVersion>
    </Container>
  );
}
