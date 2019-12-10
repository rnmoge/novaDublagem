import React from 'react';
// import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Container, TextFooter, AreaIcon, Icon} from './styles';
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
      <TextFooter onPress={() => handleExit()}>Sair</TextFooter>
    </Container>
  );
}
