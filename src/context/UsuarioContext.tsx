import React, {createContext, useReducer, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AlimentosApi from '../api/AlimentosApi';
import {Data, UsuarioResponse} from '../interfaces/IUsuario';
import {usuarioReducer, UsuarioState} from './UsuarioReducer';

type UsuarioContextProps = {
  userData: Data | null;
  getUsuario: () => Promise<void>;
  loading:boolean
};
const usuarioInitialState: UsuarioState = {
  userData: null,
};
export const UsuarioContext = createContext({} as UsuarioContextProps);

export const UsuarioProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(usuarioReducer, usuarioInitialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsuario();
  }, []);

  const getUsuario = async () => {
    setLoading(true);
    const userId = await AsyncStorage.getItem('userId');
    const {data} = await AlimentosApi.get<UsuarioResponse>(
      `/UsuariosAlimentos/${userId}`,
    );

    if (data.status === 200) {
      dispatch({
        type: 'getUserById',
        payload: {
          userData: data.data,
        },
      });
    }
    setLoading(false);
  };

  return (
    <UsuarioContext.Provider
      value={{
        ...state,
        getUsuario,
        loading,
      }}>
      {children}
    </UsuarioContext.Provider>
  );
};
