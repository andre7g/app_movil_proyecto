import React, {createContext, useState, useEffect} from 'react';
import AlimentosApi from '../api/AlimentosApi';
import { Dieta, DietasResponse } from '../interfaces/IDietas';
import { Ingesta, IngestasResponse } from '../interfaces/IIngestas';
import { Alimento, AlimentosIngestaResponse } from '../interfaces/IAlimentosIngesta';

type DietasContextProps = {
  dietas: Dieta[];
  ingestas: Ingesta[];
  alimentos: Alimento[];
  getDietas: (usuarioId: number) => Promise<void>;
  getIngestas: (dietaId: number) => Promise<void>;
  getAlimentos: (ingestaId: number) => Promise<void>;
  getById: (id: number) => Promise<Dieta>;
};

export const DietasContext = createContext({} as DietasContextProps);

export const DietasProvider = ({children}: any) => {

  const [dietas, setDietas] = useState<Dieta[]>([]);
  const [ingestas, setIngestas] = useState<Ingesta[]>([]);
  const [alimentos, setAlimentos] = useState<Alimento[]>([]);

  useEffect(() => {
    getDietas(2);
  }, []);

  const getDietas = async (usuarioId: number) => {
    const res = await AlimentosApi.get<DietasResponse>(`/UsuarioDietas/all/${usuarioId}`);
    setDietas(res.data.data);
    console.log(dietas);
  };

  const getIngestas = async (dietaId: number) => {
    const res = await AlimentosApi.get<IngestasResponse>(`/Ingestas/all/${dietaId}`);
    setIngestas(res.data.data)
  };

  const getAlimentos = async (ingestaId: number) => {
    const res = await AlimentosApi.get<AlimentosIngestaResponse>(`/IngestaAlimentos/all/${ingestaId}`);
    setAlimentos(res.data.data)
  };

  const getById = async (id: number) => {
    throw new Error('Not implemented');
  };

  return (
    <DietasContext.Provider
      value={{
        dietas,
        ingestas,
        alimentos,
        getDietas,
        getIngestas,
        getAlimentos,
        getById,
      }}>
      {children}
    </DietasContext.Provider>
  );
};
