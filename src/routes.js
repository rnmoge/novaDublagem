import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import TableSelection from './pages/TableSelection';
import ForgotPassword from './pages/ForgotPassword';

const Routes = createAppContainer(
  createSwitchNavigator({
    TableSelection,
    Login,
    ForgotPassword,
  })
);

export default Routes;
