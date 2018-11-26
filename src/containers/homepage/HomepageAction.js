import { createAction } from 'redux-actions';
import {
    GET_NEW_PRODUCT,
    GET_NEW_PRODUCT_SUCCESS,
    GET_NEW_PRODUCT_FAIL,
} from '../../store/actionTypes';

export const getNewProduct = createAction(GET_NEW_PRODUCT);
export const getNewProductSuccess = createAction(GET_NEW_PRODUCT_SUCCESS);
export const getNewProductFail = createAction(GET_NEW_PRODUCT_FAIL);
