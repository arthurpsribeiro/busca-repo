import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import Home from '../screens/Home';
import RepositoryPage from '../screens/RepositoryPage';

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="RepositoryPage"
        component={RepositoryPage}
        options={{
          title: 'Tela do repositório',
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
        }}
      />
    </Navigator>
  );
}
