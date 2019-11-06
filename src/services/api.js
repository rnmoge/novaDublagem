import axios from 'axios';
// utiliza adb reverse tcp:3333 tcp:3333
const api = axios.create({
  baseURL: 'http://5dc1898c6ca10a0014d5d84b.mockapi.io/novaDublagem',
});

export default api;
