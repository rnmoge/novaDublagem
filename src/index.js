import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import Routes from './routes';
import './config/ReactotronConfig';
import store from './store';
import {setNavigator} from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="ligth-content" backgroundColor="#3f51b5" />
      <Routes ref={setNavigator} />
    </Provider>
  );
}
