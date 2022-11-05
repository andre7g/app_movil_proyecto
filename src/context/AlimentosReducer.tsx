import { AlimentoDetalle } from '../interfaces/IAlimentos';
export interface AlimentoState{
    alimentoDetalle: AlimentoDetalle | null
}

type AlimentoAction =  
    | { type: 'getAlimentoById', payload:{ alimentoDetalle:AlimentoDetalle } }


    export const alimentoReducer = ( state: AlimentoState, action : AlimentoAction ) : AlimentoState => {
        switch(action.type){
                case 'getAlimentoById':
                    return{
                        ...state,
                        alimentoDetalle:action.payload.alimentoDetalle
                    }
            default:
                return state;
        }
    }