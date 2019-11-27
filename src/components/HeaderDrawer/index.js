import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {AsyncStorage} from 'react-native';
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
import * as MenuActions from '../../store/modules/menu/actions';
// import store from '../../store/modules/login/reducers';

export default function HeaderDrawer() {
  const {data} = useSelector(state => state.table);
  console.tron.log(data);
  console.tron.log('dataHeader');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MenuActions.menuSucess());
  }, [dispatch]);
  return (
    <Container>
      <ContainerAvatar>
        <TextAvatar>U</TextAvatar>
      </ContainerAvatar>
      <ContainerUser
        data={data}
        renderItem={({item}) => {
          return (
            <>
              <ContainerName>
                <TextName>{item.username}</TextName>
              </ContainerName>
              <ContainerEmail>
                <TextEmail>user@email.com</TextEmail>
              </ContainerEmail>
            </>
          );
        }}
      />
    </Container>
  );
}
