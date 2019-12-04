import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
// utiliza adb reverse tcp:3333 tcp:3333
const api2 = axios.create({
  baseURL: 'http://localhost:3000',
});

export default api2;
