
import { types } from "../types/types";

const initialState = {
    checking: true,
     uid: null,
    name: null
};

export const productReducer = (state= initialState, action ) => {

    switch ( action.type ) {
        
        case types.productStartAddNew:
            
            return {
                ...state,
                ...action.payload
            };
    
        default:
            return state;
    }
};

