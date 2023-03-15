import {TOKEN_LOCAL_STORAGE} from '../hooks/useUserAuth';

export const getToken = ()=>{
    return localStorage.getItem(TOKEN_LOCAL_STORAGE)
}