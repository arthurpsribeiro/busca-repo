import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';

import Home from './src/screens/Home';
import store from './src/store';

const App = () => {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <StatusBar />
          <Home />
        </Provider>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
