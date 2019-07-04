import axios from 'axios';
import _get from 'lodash/get';

import Defines from 'config';
import { store } from 'store';
import { push } from 'react-router-redux'
import { loadState } from 'helpers/LocalStorage';
import { destroySession } from 'services/login/actions';

const request = axios.create({
    baseURL: `${Defines.API_URL}/`,
});
let cache = true

request.interceptors.request.use(config => {

    const configObj = config;
    const tokenStr = loadState();

    if (tokenStr) {
        configObj.headers.common['x-access-token'] = tokenStr.session.token;
    }
    // if (_toLower(configObj.method) === 'get') {
    //     configObj.params = {
    //         ...configObj.params || {},
    //         t: new Date().getTime(),
    //     };
    // }
    return configObj;
});

request.interceptors.response.use((response) => {
    return response;
}, (error) => {
    // Do something with response error 
    if (error.response.status === 401) {
        if(cache){
            alert('Your Session has expired')
            cache = false
        }
        store.dispatch(destroySession())
        window.open('/', '_self');
    }
    return Promise.reject(error.response);
});

export default request;
