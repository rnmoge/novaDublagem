import {combineReducers} from 'redux';
import common from './common/reducers';
import login from './login/reducers';

export default combineReducers({
  common,
  login,
});
