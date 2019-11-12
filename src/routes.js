import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Login from './pages/Login';
import Home from './pages/Home';
import TableSlection from './pages/TableSelection';
import ForgotPassword from './pages/ForgotPassword';
import Catalogo from './pages/Catalog';
// import Catalog from './pages/Catalog';
// import Repositories from './pages/Repositories';

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
const createDrawerNavigatorApp = createDrawerNavigator(
  {
    Home,
    Catalogo,
  },
  {}
);
const createAppNavigation = createSwitchNavigator({
  Home: {screen: createDrawerNavigatorApp},
  Login,
  TableSlection,
  ForgotPassword,
});
const Routes = createAppContainer(createAppNavigation);

export default Routes;
