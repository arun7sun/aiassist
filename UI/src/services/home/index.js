import * as types from './actionTypes';
import initialState from './initialState';

const speedHome = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_HOME:
            return {
                ...state,
                isLoaded:true,
                data: action.payload.data
            };
        case types.GET_HOME_ERROR:
            return {
                ...state,
                isLoaded:false,
                errormessage: action.payload.data.error.message
            };
        case types.GET_HOME_REQUEST:
            return {
                ...state,
                isLoaded:false
            };
        default:
            return state;
    }
};


export default speedHome;