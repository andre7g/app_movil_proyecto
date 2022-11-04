import { Auth } from '../interfaces/IAuth';
export interface AuthState{
    status: 'checking' | 'autentucado' | 'no-autenticado';
    token: string | null;
    errorMessage: string;
    user: Auth | null;
}

type AuthAction =  
    | { type: 'singIn', payload:{ token: string, user:Auth } }
    | { type: 'addError', payload: string }
    | { type: 'removeError'}
    | { type: 'notAuthenticated'}
    | { type: 'logout'}

    export const authReducer = ( state: AuthState, action : AuthAction ) : AuthState => {
        switch(action.type){
            case 'addError':
                return{
                    ...state,
                    user: null,
                    status: 'no-autenticado',
                    token: null,
                    errorMessage: action.payload
                }
                case 'removeError':
                    return{
                        ...state,
                        errorMessage:''
                    }
                case 'singIn':
                    return{
                        ...state,
                        errorMessage:'',
                        status: 'autentucado',
                        token: action.payload.token,
                        user:action.payload.user
                    }
                case 'logout':
                case 'notAuthenticated':
                    return{
                        ...state,
                        status: 'no-autenticado',
                        token: null,
                        user: null,
                    }
            default:
                return state;
        }
    }