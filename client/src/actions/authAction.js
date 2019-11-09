import axios from 'axios';
import { returnErrors } from "./errorAction";
import {
    USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL
} from './types';

//check token & load user
export const loadUser = () => (dispatch, getState) => {
    //user loading

    console.log('7. call USER_LOADING from authAction');
    dispatch({ type: USER_LOADING });
    console.log('9. after call USER_LOADING from authAction');
    //get token from localstorage
    const token = getState().auth.token;
    console.log('token '+ token);
    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };
    console.log(config);

    if (token) {
        config.headers['x-auth-token'] = token;
        console.log('token '+ token);
    };   console.log('10 calling user load if token corrected, else call returnerror and auth error');
    axios.get('/api/auth/user', config)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}
