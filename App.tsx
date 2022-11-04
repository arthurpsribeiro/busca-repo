import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';

import { Routes } from './src/routes';
import store from './src/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SafeAreaView style={{ flex: 1 }}>
            <Routes />
          </SafeAreaView>
        </Provider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
