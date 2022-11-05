import React, {createContext, useState, useEffect, useReducer} from 'react';
import AlimentosApi from '../api/AlimentosApi';
import { GrupoAlimenticio, GruposAlimenticiosResponse } from '../interfaces/IGruposAlimenticios';
import { Alimento, AlimentoDetalle, AlimentoResponse, AlimentosResponse, Data } from '../interfaces/IAlimentos';
import { alimentoReducer, AlimentoState } from './AlimentosReducer';
import PostApi from '../api/PostApi';

type AlimentosContextProps = {
  grupos: GrupoAlimenticio[];
  alimentos: Alimento[];
  alimentoDetalle: AlimentoDetalle|null;
  getGrupos: () => Promise<void>;
  getAlimentos: (grupoId: number) => Promise<void>;
  getById: (id: number) => Promise<void>;
  addAlimento: (addRequest: Data) => void;
};
const AlimentoInitialState: AlimentoState = {
  alimentoDetalle:null
};
export const AlimentosContext = createContext({} as AlimentosContextProps);


export const AlimentosProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(alimentoReducer, AlimentoInitialState);

  const [grupos, setGrupos] = useState<GrupoAlimenticio[]>([]);
  const [alimentos, setAlimentos] = useState<Alimento[]>([]);

  useEffect(() => {
    getGrupos();
  }, []);

  const getGrupos = async () => {
    const res = await AlimentosApi.get<GruposAlimenticiosResponse>(`/GruposAlimenticios`);
    setGrupos(res.data.data);
    //console.log(dietas);
  };

  const getAlimentos = async (grupoId: number) => {
    const res = await AlimentosApi.get<AlimentosResponse>(`/AlimentosPorcion/byGrupoAlimenticio/${grupoId}`);
    setAlimentos(res.data.data)
  };

//   const getAlimentos = async (ingestaId: number) => {
//     const res = await AlimentosApi.get<AlimentosIngestaResponse>(`/IngestaAlimentos/all/${ingestaId}`);
//     setAlimentos(res.data.data)
//   };

  const getById = async (id: number) => {
    const {data} = await AlimentosApi.get<AlimentoResponse>(`/AlimentosPorcion/${id}`);
    if(data.status === 200){
      dispatch({
        type: 'getAlimentoById',
        payload: {
          alimentoDetalle: data.data,
        },
      });
    }
  };

  const addAlimento = async ({UsuarioId, AlimentoId,Cantidad}: Data) => {
    try {
      const {data} = await PostApi.post<AlimentosResponse>('/UsuariosAlimentos', {
        Data: {UsuarioId, AlimentoId,Cantidad},
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlimentosContext.Provider
      value={{
        ...state,
        alimentos,
        grupos,
        getGrupos,
        getAlimentos,
        getById,
        addAlimento,
      }}>
      {children}
    </AlimentosContext.Provider>
  );
};
