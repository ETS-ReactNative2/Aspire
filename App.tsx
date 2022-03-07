import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

const App = () => {
  return(
    <Provider store={Store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
