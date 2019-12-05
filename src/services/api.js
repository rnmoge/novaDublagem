import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
// utiliza adb reverse tcp:3333 tcp:3333
const api = axios.create({
  baseURL: 'https://apinovadublagem.azurewebsites.net',
});

export default api;
