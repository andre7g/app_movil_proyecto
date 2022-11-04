import React, {createContext, useState, useEffect} from 'react';
import AlimentosApi from '../api/AlimentosApi';
import { GrupoAlimenticio, GruposAlimenticiosResponse } from '../interfaces/IGruposAlimenticios';
import { Alimento, AlimentoDetalle, AlimentoResponse, AlimentosResponse } from '../interfaces/IAlimentos';

type AlimentosContextProps = {
  grupos: GrupoAlimenticio[];
  alimentos: Alimento[];
  alimento: any;
  getGrupos: () => Promise<void>;
  getAlimentos: (grupoId: number) => Promise<void>;
  //getById: (id: number) => Promise<AlimentoDetalle>;
};

export const AlimentosContext = createContext({} as AlimentosContextProps);

export const AlimentosProvider = ({children}: any) => {

  const [grupos, setGrupos] = useState<GrupoAlimenticio[]>([]);
  const [alimentos, setAlimentos] = useState<Alimento[]>([]);
  const [alimento, setAlimento] = useState();

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

  // const getById = async (id: number) => {
  //   const res = await AlimentosApi.get<AlimentoResponse>(`/IngestaAlimentos/all/${ingestaId}`);
  //   setAlimentos(res.data.data)
  // };

  return (
    <AlimentosContext.Provider
      value={{
        grupos,
        alimentos,
        alimento,
        getGrupos,
        getAlimentos,
        //getById,
      }}>
      {children}
    </AlimentosContext.Provider>
  );
};
