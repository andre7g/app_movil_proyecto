import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RegisterScreen} from '../screens/Login/RegisterScreen';
import {LoginScreen} from '../screens/Login/LoginScreen';
import {ProtectedScreen} from '../screens/Login/ProtectedScreen';
import {AuthContext} from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import { Tabs } from './Tabs';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {status} = useContext(AuthContext);

  if(status === "checking") return <LoadingScreen/>


  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {status !== 'autentucado' ? (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      ) : (
        <Stack.Screen
          name="Tabs"
          component={Tabs}
        />
      )}
    </Stack.Navigator>
  );
};
