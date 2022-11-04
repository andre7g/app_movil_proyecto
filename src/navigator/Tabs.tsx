import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Navigator} from './Navigator';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RutinasNavigator } from './RutinasNavigator';
import { DietasNavigator } from './DietasNavigator';
import { AlimentosNavigator } from './AlimentosNavigator';


const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
            position:'absolute',
          backgroundColor: 'rgba(255,255,255,0.80)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
      }}>
      <Tab.Screen
        name="Agua"
        component={AlimentosNavigator}
        options={{
          tabBarLabel: 'Agua',
          tabBarIcon: () => (
            <Icon name="md-water-outline" color="#009688" size={30} />
          ),
          tabBarActiveTintColor: '#009688',
          tabBarInactiveTintColor: '#C6E2CF',
        }}
      />
      <Tab.Screen
        name="AlimentosNavigator"
        component={AlimentosNavigator}
        options={{
          tabBarLabel: 'Alimentos',
          tabBarIcon: () => (
            <Icon name="md-fast-food-outline" color="#009688" size={30} />
          ),
          tabBarActiveTintColor: '#009688',
          tabBarInactiveTintColor: '#C6E2CF',
        }}
      />
      <Tab.Screen
        name="Usuario"
        component={AlimentosNavigator}
        options={{
          tabBarLabel: 'Usuario',
          tabBarIcon: () => (
            <Icon name="fitness-outline" color="#009688" size={30} />
          ),
          tabBarActiveTintColor: '#009688',
          tabBarInactiveTintColor: '#C6E2CF',
        }}
      />
      <Tab.Screen
        name="RutinasNavigator"
        component={RutinasNavigator}
        options={{
          tabBarLabel: 'Rutinas',
          tabBarIcon: () => (
            <Icon name="list-outline" color="#009688" size={30} />
          ),
          tabBarActiveTintColor: '#009688',
          tabBarInactiveTintColor: '#C6E2CF',
        }}
      />
      <Tab.Screen
        name="DietasNavigator"
        component={DietasNavigator}
        options={{
          tabBarLabel: 'Dietas',
          tabBarIcon: () => (
            <Icon name="list-outline" color="#009688" size={30} />
          ),
          tabBarActiveTintColor: '#009688',
          tabBarInactiveTintColor: '#C6E2CF',
        }}
      />
    </Tab.Navigator>
  );
};
