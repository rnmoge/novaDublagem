import {combineReducers} from 'redux';
import common from './common/reducers';
import login from './login/reducers';
import table from './table/reducers';
import menu from './menu/reducers';
import catalog from './catalog/reducers';
import order from './order/reducers';
import neworder from './neworder/reducers';
import productorder from './productorder/reducers';
import cart from './cart/reducers';
import home from './home/reducers';
import finalizeorder from './finalizeorder/reducers';
import queryorder from './queryorder/reducers';
import registerclient from './registerclient/reducers';

export default combineReducers({
  common,
  login,
  table,
  menu,
  catalog,
  order,
  neworder,
  productorder,
  cart,
  home,
  finalizeorder,
  queryorder,
  registerclient,
});
