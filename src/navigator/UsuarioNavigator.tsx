import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GruposAlimenticiosScreen from '../screens/Alimentos/GruposAlimenticiosScreen';
import AlimentosScreen from '../screens/Alimentos/AlimentosScreen';
import { AlimentoScreen } from '../screens/Alimentos/AlimentoScreen';
import UsuarioScreen from '../screens/Usuario/UsuarioScreen';

export type UsuarioStackParams = {
  UsuarioScreen: undefined;
};

const Stack = createStackNavigator<UsuarioStackParams>();

export const UsuarioNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
          cardStyle: {
            backgroundColor: 'white',
          },
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
        }}>
        <Stack.Screen
          name="UsuarioScreen"
          component={UsuarioScreen}
          options={{title: 'UsuarioScreen'}}
        />
      </Stack.Navigator>
  );
};
