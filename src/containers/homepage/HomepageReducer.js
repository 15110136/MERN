import { handleActions } from 'redux-actions';
import {
    GET_NEW_PRODUCT_SUCCESS,
    GET_NEW_PRODUCT_FAIL,
} from '../../store/actionTypes';

const initialState = {
    dataNewProducts: [],
    err: {},
    isLoading: true,
};

const actions = {
    [GET_NEW_PRODUCT_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataNewProducts: payload.data,
        isLoading: false,
    }),
    [GET_NEW_PRODUCT_FAIL]: (state, { payload }) => ({
        ...state,
        err: payload,
        isLoading: false,
    }),
};

export default handleActions(actions, initialState);
