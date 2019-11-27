import {combineReducers} from 'redux';
import common from './common/reducers';
import login from './login/reducers';
import table from './table/reducers';
import menu from './menu/reducers';
import catalog from './catalog/reducers'; // lol
// agora é só eu pegar e desestruturar na pagina as informações que eu quero certo ? porem
// boa
// ou não estou sabendo como pega o data pra fazer aparecer o nome e o modelo/
// como assim tipo o estão dentro do array ?

// //me manda print do array que eles estao contidos
// devo pegar aonde e colocar aonde
export default combineReducers({
  common,
  login,
  table,
  menu,
  catalog,
});
