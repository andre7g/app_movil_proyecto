import React, {createContext, useReducer, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PostApi from '../api/PostApi';
import {Auth, AuthResponse, Data} from '../interfaces/IAuth';
import {authReducer, AuthState} from './AuthReducer';
import AlimentosApi from '../api/AlimentosApi';
import { UsuarioContext } from './UsuarioContext';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Auth | null;
  status: 'checking' | 'autentucado' | 'no-autenticado';
  singIn: (authRequest: Data) => void;
  singUp: () => void;
  logOut: () => void;
  removeError: () => void;
};
const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);


  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');
    //No hay token
    if( !token ) return dispatch({type:'notAuthenticated'});
    //Hay Token => clase udemy react native 333, hay que validar token y expiracion de token 
    //crear en el backend y hacer de nuevo setItem del token por que cambia
    const {data} = await AlimentosApi.get<AuthResponse>(`/Usuarios/VerificarMovil/${userId}`)
    if(data.status !== 200){
        return dispatch({type:'notAuthenticated'});
    }
    dispatch({
        type: 'singIn',
        payload:{
            token: data.data.token,
            user: data.data
        }
    });

  };

  const singIn = async ({codigo, pass}: Data) => {
    try {
      const {data} = await PostApi.post<AuthResponse>('/Usuarios/authMovil', {
        Data: {codigo, pass},
      });
      if (data.status === 200) {
        dispatch({
          type: 'singIn',
          payload: {
            token: data.data.token,
            user: data.data,
          },
        });
        await AsyncStorage.setItem('token', data.data.token);
        await AsyncStorage.setItem('userId', data.data.id.toString());
      } else {
        dispatch({
          type: 'addError',
          payload: data.message || 'Información incorrecta',
        });
      }
    } catch (error) {
      dispatch({
        type: 'addError',
        payload: 'Información incorrecta',
      });
    }
  };

  const singUp = () => {};
  const logOut = async() => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userId');
    dispatch({type:'logout'});
  };

  const removeError = () => {
    dispatch({
      type: 'removeError',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        singUp,
        singIn,
        logOut,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
