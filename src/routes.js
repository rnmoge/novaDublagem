import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import TableSelection from './pages/TableSelection';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    TableSelection,
  })
);

export default Routes;
