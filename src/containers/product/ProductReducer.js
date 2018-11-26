import { handleActions } from 'redux-actions';
import {
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
} from '../../store/actionTypes';

const initialState = {
    dataProducts: [],
    err: {},
    isLoading: true,
};

const actions = {
    [GET_PRODUCT_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataProducts: payload.data,
        isLoading: false,
    }),
    [GET_PRODUCT_FAIL]: (state, { payload }) => ({
        ...state,
        err: payload,
        isLoading: false,
    }),
};

export default handleActions(actions, initialState);
