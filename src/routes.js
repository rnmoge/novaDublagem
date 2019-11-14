import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  createDrawerNavigator,
  DrawerItems,
  drawerIcon,
} from 'react-navigation-drawer';
import {
  Image,
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
// import {Container, Content, Header, Body} from 'native-base';
// import {black} from 'ansi-colors';
import Login from './pages/Login';
import Home from './pages/Home';
import TableSelection from './pages/TableSelection';
import ForgotPassword from './pages/ForgotPassword';
import Catalogo from './pages/Catalog';
import logoHome from '../assets/image/ico.png';
import HeaderDrawer from './components/HeaderDrawer';
import FooterDrawer from './components/FooterDrawer';

// const createSwitchNavigatorApp = createSwitchNavigator({
//   Login,
//   Home,
// });
// const createStackNavigatorApp = createStackNavigator({
//  Catalogo: {
//    screen: Catalogo,
//
//    navigationOptions: {
//      title: 'Catalogo',
//      headerStyle: {
//        backgroundColor: '#f4511e',
//      },
//      headerTintColor: '#fff',
//      headerTitleStyle: {
//        fontWeight: 'bold',
//      },
//    },
//  },
//  Home,
// });
// const createBottomTabNavigatorApp = createBottomTabNavigator({
//  Login,
//  Menu,
// });
const customDrawer = props => (
  <SafeAreaView style={{flex: 1}}>
    <StatusBar backgroundColor="#002984" />
    <View
      style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#3f51b5',
      }}>
      <HeaderDrawer />
    </View>
    <View>
      <DrawerItems {...props} />
      <View>
        <FooterDrawer />
      </View>
    </View>
  </SafeAreaView>
);

const createDrawerNavigatorApp = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      },
    },
    Catalogo: {
      screen: Catalogo,
      navigationOptions: {title: 'Catálogo'},
    },
  },
  {
    drawerBackgroundColor: '#ffffff',
    drawerWidth: 300,
    contentComponent: customDrawer,
    contentOptions: {
      activeTintColor: '#707070',
      labelStyle: {
        fontSize: 16,
        color: '#263238',
      },
    },
  }
);
const createAppNavigation = createSwitchNavigator({
  Home: {screen: createDrawerNavigatorApp},
  TableSelection,
  Login,
  ForgotPassword,
});
const Routes = createAppContainer(createAppNavigation);

export default Routes;
