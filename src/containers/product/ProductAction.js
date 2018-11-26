import { createAction } from 'redux-actions';
import {
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
} from '../../store/actionTypes';

export const getProduct = createAction(GET_PRODUCT);
export const getProductSuccess = createAction(GET_PRODUCT_SUCCESS);
export const getProductFail = createAction(GET_PRODUCT_FAIL);
