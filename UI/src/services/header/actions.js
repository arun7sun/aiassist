import * as types from './actionTypes';
export const getHeader = () => dispatch => {
            dispatch({
                type: types.GET_HEADER,
                payload: []
            });
};

export const updateHeader = (currentState) => dispatch => {
            dispatch({
                type: types.UPDATE_HEADER,
                payload: currentState,
            });
};

