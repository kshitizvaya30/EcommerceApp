import * as React from 'react';
import AppNavigator from './src/components/AppNavigator';
import store from './src/redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}


export default App;