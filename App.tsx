import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';

const App = () => {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <View
          style={{
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Busca Repo App</Text>
        </View>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
