import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DietasScreen from '../screens/Dietas/DietasScreen';
import IngestasScreen from '../screens/Dietas/IngestasScreen';
import AlimentosIngestaScreen from '../screens/Dietas/AlimentosIngestaScreen';
import PorcionAlimentoScreen from '../screens/Dietas/PorcionAlimentoScreen';

export type DietasStackParams = {
    DietasScreen: undefined;
    IngestasScreen: {
      id: number;
      name: string;
    };
    AlimentosIngestaScreen: {
      id: number;
      name: string;
    };
    PorcionAlimentoScreen: {
      name: string;
      cantidad: number;
      proteina_g: number;
      carbohidratos_g: number;
      grasaTotal_g: number;
      energia_KcaL: number;
      porcion_alimento: string;
    };
};

const Stack = createStackNavigator<DietasStackParams>();

export const DietasNavigator = () => {
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
          headerTintColor: '#212121',//color del titulo de las rutas
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:28
          },
        }}>
        <Stack.Screen
          name="DietasScreen"
          component={DietasScreen}
          options={{title: 'Dietas'}}
        />
        <Stack.Screen
          name="IngestasScreen"
          component={IngestasScreen}
          options={{title: 'Ingestas'}}
        />
        <Stack.Screen
          name="AlimentosIngestaScreen"
          component={AlimentosIngestaScreen}
          options={{title: 'Alimentos'}}
        />
        <Stack.Screen
          name="PorcionAlimentoScreen"
          component={PorcionAlimentoScreen}
          options={{title: 'Alimento'}}
        />
      </Stack.Navigator>
  );
};
