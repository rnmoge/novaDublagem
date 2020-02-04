import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
// utiliza adb reverse tcp:3333 tcp:3333
const api = axios.create({
  baseURL: 'https://node-nova-dublagem.herokuapp.com',
  // baseURL: 'http://novadublagemweb.com.br',
});

export default api;
