import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './pages/Login';
import Home from './pages/Home';
import TableSelection from './pages/TableSelection';
import ForgotPassword from './pages/ForgotPassword';
import Catalogo from './pages/Catalog';
import HeaderDrawer from './components/HeaderDrawer';
import FooterDrawer from './components/FooterDrawer';
import Request from './pages/Request';
import ProductDetails from './pages/ProductDetails';
import RegisterOrder from './pages/RegisterOrder';
import QueryOrder from './pages/QueryOrder';
import TransmitOrder from './pages/TransmitOrder';
import DetailsClient from './pages/DetailsClient';
import NewOrder from './pages/NewOrder';
import Testestando from './pages/Testestando';
import ProductOrder from './pages/ProductOrder';

// const createSwitchNavigatorApp = createSwitchNavigator({
//   Login,
//   Home,
// });
// const createStackNavigatorApp = createStackNavigator({
//   Cart: {
//     screen: Cart,
//     navigationOptions: {
//       title: 'Carrinho',
//       headerStyle: {
//         backgroundColor: '#3f51b5',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   },
// });
// const createBottomTabNavigatorApp = createBottomTabNavigator({
//  Login,
//  Menu,
// });
const customDrawer = props => (
  <SafeAreaView style={{flex: 1}}>
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
        drawerIcon: <Icon name="home" size={25} color="#263238" />,
      },
    },
    Catalogo: {
      screen: Catalogo,
      navigationOptions: {
        title: 'Catálogo',
        drawerIcon: <Icon name="bookmark" size={25} color="#263238" />,
      },
    },
    Request: {
      screen: Request,
      navigationOptions: {
        title: 'Pedidos',
        drawerIcon: <Icon name="shopping-bag" size={25} color="#263238" />,
      },
    },
    TableSelection: {
      screen: TableSelection,
      navigationOptions: {
        title: 'Selecionar Tabela',
        drawerIcon: <Icon name="table" size={25} color="#263238" />,
      },
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
  Login,
  NewOrder,
  ProductOrder,
  Home: {screen: createDrawerNavigatorApp},
  RegisterOrder,
  ProductDetails,
  TableSelection,
  DetailsClient,
  TransmitOrder,
  QueryOrder,
  ForgotPassword,
  Testestando,
});
const Routes = createAppContainer(createAppNavigation);

export default Routes;
