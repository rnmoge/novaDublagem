import React, {useEffect} from 'react';
// import {View} from 'react-native';
// import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Image, ContainerImage} from './styles';
import Header from '../../components/Header';
// import Logo from '../../components/Logo';
import logo from '../../../assets/image/logo-azul.png';
import * as ActionsHome from '../../store/modules/home/actions';

export default function Home({navigation}) {
  const {data2} = useSelector(state => state.table);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActionsHome.homeClean());
  }, [data2.id]); // eslint-disable-line
  return (
    <Container>
      <Header
        title="Home"
        iconName="bars"
        icoNameTwo="shopping-cart"
        functionOnpressIconLeft={() => navigation.openDrawer()}
      />
      <ContainerImage>
        <Image source={logo} />
      </ContainerImage>
    </Container>
  );
}
