import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Login from './pages/Login';
import Home from './pages/Home';
// import Repositories from './pages/Repositories';

const createSwitchNavigatorApp = createSwitchNavigator({
  Login,
  Home,
});
const createStackNavigatorApp = createStackNavigator({
  Login,
  Home,
});
// const createBottomTabNavigatorApp = createBottomTabNavigator({
//  Login,
//  Menu,
// });
const createDrawerNavigatorApp = createDrawerNavigator({
  Login,
  Home,
});
const createAppNavigation = createSwitchNavigator({
  Login,
  Home,
});
const Routes = createAppContainer(createDrawerNavigatorApp);

export default Routes;
