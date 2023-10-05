import { types } from "../types/types";
const initialState = {
    modalOpen: false,
    btnNextPage: false,
    showAlert: false,
}

export const uiReducer = ( state = initialState, action ) => {

    switch (action.type) {
      
        case types.uiOpenAddressModal:
            return{
                ...state,
                modalAddressOpen: true
            }
      
        case types.uiCloseAddressModal:
            return {
                ...state,
                modalAddressOpen: false
            }
        case types.uiOpenMapModal:
            return{
                ...state,
                modalMapOpen: true
            }
        
        case types.uiCloseMapModal:
            return {
                ...state,
                modalMapOpen: false
            }
        case types.uiNextPage: 
            return {
                ...state,
                btnNextPage: true
            }

            case types.uiShowAlert: 
            return {
                ...state,
                showAlert: true
            }

        case types.uiOpenProductModal:
            return {
                ...state, 
                modalProductOpen: true
            }

        case types.uiCloseProductModal:
            return {
                ...state,
                modalProductOpen: false
            }

        default:
            return state;
    }
}