import {combineReducers} from 'redux';
import common from './common/reducers';
import login from './login/reducer';

export default combineReducers({
  common,
  login,
});
