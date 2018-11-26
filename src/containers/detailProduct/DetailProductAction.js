import { createAction } from 'redux-actions';
import {
    GET_DETAIL_PRODUCT,
    GET_DETAIL_PRODUCT_SUCCESS,
    GET_DETAIL_PRODUCT_FAIL,
} from '../../store/actionTypes';

export const getDetailProduct = createAction(GET_DETAIL_PRODUCT);
export const getDetailProductSuccess = createAction(GET_DETAIL_PRODUCT_SUCCESS);
export const getDetailProductFail = createAction(GET_DETAIL_PRODUCT_FAIL);
