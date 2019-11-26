import {combineReducers} from 'redux';
import common from './common/reducers';
import login from './login/reducers';
import table from './table/reducers';
import menu from './menu/reducers';

export default combineReducers({
  common,
  login,
  table,
  menu,
});
