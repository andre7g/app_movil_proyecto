import { Data } from '../interfaces/IUsuario';
export interface UsuarioState{
    userData: Data | null
}

type UsuarioAction =  
    | { type: 'getUserById', payload:{ userData:Data } }


    export const usuarioReducer = ( state: UsuarioState, action : UsuarioAction ) : UsuarioState => {
        switch(action.type){
                case 'getUserById':
                    return{
                        ...state,
                        userData:action.payload.userData
                    }
            default:
                return state;
        }
    }