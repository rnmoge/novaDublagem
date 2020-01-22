import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {TouchableOpacity, Text} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
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
import logo from '../../../assets/image/logo-azul.png';
import * as MenuActions from '../../store/modules/menu/actions';

export default function HeaderDrawer() {
  const dispatch = useDispatch();
  const {username, permission} = useSelector(state => state.menu);
  function menuRender() {
    dispatch(MenuActions.menuRequest());
  }

  return (
    <Container
      onLayout={() => {
        menuRender();
      }}>
      <ContainerAvatar>
        <TextAvatar>{username.substring(0, 1).toUpperCase()}</TextAvatar>
      </ContainerAvatar>
      <ContainerUser>
        <ContainerName>
          <TextName>{username}</TextName>
        </ContainerName>
        <ContainerEmail>
          <TextEmail>{permission}</TextEmail>
        </ContainerEmail>
      </ContainerUser>
    </Container>
  );
}
