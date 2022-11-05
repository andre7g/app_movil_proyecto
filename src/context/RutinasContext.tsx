import React, {createContext, useState, useEffect} from 'react';
import {Rutina, RutinaResponse} from '../interfaces/IRutinas';
import AlimentosApi from '../api/AlimentosApi';
import {Serie, SeriesResponse} from '../interfaces/ISeries';
import {Ejercicio, EjerciciosResponse} from '../interfaces/IEjercicios';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RutinasContextProps = {
  rutinas: Rutina[];
  series: Serie[];
  ejercicios: Ejercicio[];
  getRutinas: (usuarioId: string | null) => Promise<void>;
  getSeries: (rutinaId: number) => Promise<void>;
  getEjercicios: (serieId: number) => Promise<void>;
  getById: (id: number) => Promise<Rutina>;
};

export const RutinasContext = createContext({} as RutinasContextProps);

export const RutinasProvider = ({children}: any) => {
  const [rutinas, setRutinas] = useState<Rutina[]>([]);
  const [series, setSeries] = useState<Serie[]>([]);
  const [ejercicios, setEjercicios] = useState<Ejercicio[]>([]);

  const getRutinasByUser = async () => {
    const userId = await AsyncStorage.getItem('userId');
    getRutinas(userId);
  };

  useEffect(() => {
    getRutinasByUser();
  }, []);

  const getRutinas = async (usuarioId: string | null) => {
    if (usuarioId !== null) {
      const res = await AlimentosApi.get<RutinaResponse>(
        `/UsuarioRutina/all/${usuarioId}`,
      );
      setRutinas(res.data.data);
    }
  };
  const getSeries = async (rutinaId: number) => {
    const res = await AlimentosApi.get<SeriesResponse>(
      `/Series/all/${rutinaId}`,
    );
    setSeries(res.data.data);
  };
  const getEjercicios = async (serieId: number) => {
    const res = await AlimentosApi.get<EjerciciosResponse>(
      `/SeriesEjercicios/all/${serieId}`,
    );
    setEjercicios(res.data.data);
  };
  const getById = async (id: number) => {
    throw new Error('Not implemented');
  };
  return (
    <RutinasContext.Provider
      value={{
        rutinas,
        series,
        ejercicios,
        getRutinas,
        getSeries,
        getEjercicios,
        getById,
      }}>
      {children}
    </RutinasContext.Provider>
  );
};
