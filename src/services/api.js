import axios from 'axios';
// utiliza adb reverse tcp:3333 tcp:3333
const api = axios.create({
  baseURL: 'http://10.0.0.114:8080',
});

export default api;
