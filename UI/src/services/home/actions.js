import * as types from './actionTypes';
import request from 'helpers/request';

import apiPaths from 'apiPaths';


export const gethome = (options) => dispatch => {
    dispatch({ type: types.GET_HOME_REQUEST });
    request
        .post(apiPaths.home.pie,options)
        .then(({ data }) => {
            dispatch({
                type: types.GET_HOME,
                payload: data,
            });
        })
        .catch(error => {
            dispatch({
                type: types.GET_HOME_ERROR,
                payload: error,
            });
        })
};
