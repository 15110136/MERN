import { handleActions } from 'redux-actions';
import {
    GET_DETAIL_PRODUCT_SUCCESS,
    GET_DETAIL_PRODUCT_FAIL,
} from '../../store/actionTypes';

const initialState = {
    dataDetailProducts: {},
    err: {},
    isLoading: true,
};

const actions = {
    [GET_DETAIL_PRODUCT_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataDetailProducts: payload.data,
        isLoading: false,
    }),
    [GET_DETAIL_PRODUCT_FAIL]: (state, { payload }) => ({
        ...state,
        err: payload,
        isLoading: false,
    }),
};

export default handleActions(actions, initialState);
