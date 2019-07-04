import * as types from './actionTypes';
export const getHeader = () => dispatch => {
            dispatch({
                type: types.GET_HEADER,
                payload: [{
                    name: "Myntra",
                    value: "'Myntra'",
                    active:true
                },
                {
                    name: "Jabong",
                    value: "'jabong'",
                    active:false
                },
                {
                    name: "Myntra & Jabong",
                    value: "'Myntra','jabong'",
                    active:false
                }
                ]
            });
};

export const updateHeader = (currentState) => dispatch => {
            dispatch({
                type: types.UPDATE_HEADER,
                payload: currentState,
            });
};

