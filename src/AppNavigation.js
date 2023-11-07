import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import GuardinhasScreen from './screens/GuardinhasScreen';
import VeiculosScreen from './screens/VeiculosScreen';
import MapaGuardinhas from './screens/MapaGuardinhas';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Guardinhas" component={GuardinhasScreen} />
        <Stack.Screen name="Veiculos" component={VeiculosScreen} />
        <Stack.Screen name="MapaGuardinhas" component={MapaGuardinhas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;