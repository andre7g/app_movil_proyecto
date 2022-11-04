import React from 'react'

export const useAlimento = () => {
  return (
    <div>useAlimento</div>
  )
}


// //import { AlimentoItem } from '../interfaces/IAlimentos';
// import { AlimentosApi } from '../api/AlimentosApi';

// export const useAlimento = ( id:string ) => {
//     //console.log(id);
//     const [isLoading, setIsLoading] = useState(true);
//     const [alimentoItem, setAlimentoItem] = useState<AlimentoItem>({} as AlimentoItem);

//     const loadAlimento = async() => {
//         const res = await AlimentosApi.get<AlimentoItem>(`https://pokeapi.co/api/v2/pokemon/${id}`);
//         setAlimentoItem( res.data );
//         setIsLoading(false);
//     }
   
//     useEffect(() => {
//         loadAlimento();
//     }, [])
    
//     return{
//         isLoading,
//         alimentoItem
//     }

// }
