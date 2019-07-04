import * as types from './actionTypes';
import initialState from './initialState';

const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_HEADER:
            return {
                ...state,
                isLoaded:true,
                header: action.payload
            };
        case types.GET_HEADER_ERROR:
            return {
                ...state,
                isLoaded:false,
                errormessage: action.payload.data.error.message
            };
        case types.GET_HEADER_REQUEST:
            return {
                ...state,
                isLoaded:false
            };
        case types.UPDATE_HEADER:
            return {
                ...state,
                isLoaded:true,
                header: action.payload
            };
        case types.UPDATE_HEADER_ERROR:
            return {
                ...state,
                isLoaded:false,
                errormessage: action.payload.data.error.message
            };
        case types.UPDATE_HEADER_REQUEST:
            return {
                ...state,
                isLoaded:false
            };
        default:
            return state;
    }

};


export default HeaderReducer;