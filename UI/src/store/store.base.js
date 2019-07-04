import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from 'services/login';
import home from 'services/home';
import header from 'services/header';


const appReducer = combineReducers({
    login,
    home,
    header,
    routing: routerReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        const { routing } = state;
        state = { routing };
    }
    return appReducer(state, action);
};

export default rootReducer;