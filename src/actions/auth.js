import Swal from "sweetalert2";
import  { comercioObj } from '../components/helpers/comercioObj';
import { fetchConToken, fetchSInToken } from "../components/helpers/fetch";
import { types } from "../types/types";
import { uiNextPage, uiShowAlert } from "./ui";

export const startLogin = ( url, email, password ) => {
    return async( dispatch ) => {
        const resp = await fetchSInToken( url, { email, password }, 'POST' );
        const body = await resp.json();
        if ( body.ok ) {
            localStorage.setItem( 'token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() )
            
            dispatch(login({
                uid: body.id,
                name: body.name,
                categories: body.categories
            }))
            
        } else {
            Swal.fire( 'Error',  body.msg, 'error' );
        }
    }
} 

export const startRegister = () => {
    return async( dispatch ) => {
        const commerce=comercioObj();
        const resp = await fetchSInToken( 'commerce/new', commerce, 'POST' );
        const body = await resp.json();

        if ( body.ok ) {  
            localStorage.setItem( 'token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(login({
                uid: body.commerce._id,
                name: body.commerce.name
            }))
            dispatch( uiNextPage );
            dispatch( uiShowAlert );

        } else {
            Swal.fire( 'Error',  body.msg, 'error' );
        }
    }   
}
;

export const startChecking = () => {
    return async( dispatch ) => {
        
        const resp = await fetchConToken( 'commerce/renew' );
        const body = await resp.json();
        if ( body.ok ) {  
            localStorage.setItem( 'token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch(login({
                uid: body.id,
                name: body.name
            }))
        } else {
            Swal.fire( 'Error',  body.msg, 'error' );
            dispatch( checkingFinish() );
        }
    }
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = ( user ) => ({
    type: types.authLogin,
    payload: user 
});

export const startLogout = () => {
     return( dispatch ) => {
      //  dispatch(eventLogout() );
        dispatch( logout() );        
    } 
  
}

const logout = () => ({ type: types.authLogout });