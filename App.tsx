import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './src/navigator/Tabs';
import {AlimentosProvider} from './src/context/AlimentosContext';
import {RutinasProvider} from './src/context/RutinasContext';
import {DietasProvider} from './src/context/DietasContext';
import {LoginScreen} from './src/screens/Login/LoginScreen';
import {Navigator} from './src/navigator/Navigator';
import {AuthProvider} from './src/context/AuthContext';

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      <AlimentosProvider>
        <DietasProvider>
          <RutinasProvider>{children}</RutinasProvider>
        </DietasProvider>
      </AlimentosProvider>
    </AuthProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
      {/* <Navigator/> */}
    </NavigationContainer>
  );
};

export default App;
