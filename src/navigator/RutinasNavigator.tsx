import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RutinasScreen from '../screens/Rutinas/RutinasScreen';
import RutinaScreen from '../screens/Rutinas/RutinaScreen';
import SerieScreen from '../screens/Rutinas/SerieScreen';

export type RutinasStackParams = {
    RutinasScreen: undefined;
    RutinaScreen: {
      id: number;
      name: string;
    };
    SerieScreen: {
      id: number;
      name: string;
    };
};

const Stack = createStackNavigator<RutinasStackParams>();

export const RutinasNavigator = () => {
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
          headerTintColor: '#009688',//color del titulo de las rutas
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="RutinasScreen"
          component={RutinasScreen}
          options={{title: 'Rutinas'}}
        />
        <Stack.Screen
          name="RutinaScreen"
          component={RutinaScreen}
          options={{title: 'Ejercicios'}}
        />
        <Stack.Screen
          name="SerieScreen"
          component={SerieScreen}
          options={{title: 'Serie'}}
        />
      </Stack.Navigator>
  );
};
