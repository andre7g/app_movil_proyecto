import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GruposAlimenticiosScreen from '../screens/Alimentos/GruposAlimenticiosScreen';
import AlimentosScreen from '../screens/Alimentos/AlimentosScreen';
import { AlimentoScreen } from '../screens/Alimentos/AlimentoScreen';

export type AlimentosStackParams = {
  GruposAlimenticiosScreen: undefined;
  AlimentosScreen: {
    id: number;
    name: string;
  };
  AlimentoScreen: {
    id: number;
    name: string;
  };
};

const Stack = createStackNavigator<AlimentosStackParams>();

export const AlimentosNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: 'white',
          },
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
        }}>
        <Stack.Screen
          name="GruposAlimenticiosScreen"
          component={GruposAlimenticiosScreen}
          options={{title: 'GruposAlimenticiosScreen'}}
        />
        <Stack.Screen
          name="AlimentosScreen"
          component={AlimentosScreen}
          options={{title: 'Alimentos'}}
        />
        <Stack.Screen
          name="AlimentoScreen"
          component={AlimentoScreen}
          options={{title: 'Alimento'}}
        />
      </Stack.Navigator>
  );
};
