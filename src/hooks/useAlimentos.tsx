import {useEffect, useRef, useState} from 'react';
import React from 'react'

export const useAlimentos = () => {
  return (
    <div>useAlimentos</div>
  )
}

// import {AlimentosApi} from '../api/AlimentosApi';
// import {Alimentos, Alimento, Result} from '../interfaces/IAlimentos';

// export const useAlimentos = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [alimentos, setAlimentos] = useState<Alimento[]>([]);
//   const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

//   const loadAlimentos = async () => {
//     setIsLoading(true);
//     const res = await AlimentosApi.get<Alimentos>(nextPageUrl.current);
//     nextPageUrl.current = res.data.next;
//     mapAlimentos(res.data.results);
//   };

//   const mapAlimentos = (alimentosList: Result[]) => {
//     // alimentos.forEach( alimento => console.log(alimento.name));
//     const newAlimentos: Alimento[] = alimentosList.map(({name, url}) => {
//       const urlParts = url.split('/');
//       // console.log(urlParts);
//       const id = urlParts[urlParts.length - 2];
//       //console.log(id);
//       const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
//       //rconsole.log(picture);
//       return {
//         id,
//         picture,
//         name,
//       };
//     });
//     setAlimentos([...alimentos, ...newAlimentos]);
//     setIsLoading(false);
//   };
//   useEffect(() => {
//     loadAlimentos();
//   }, []);

//   return {
//     isLoading,
//     alimentos,
//     loadAlimentos,
//   };
// };
