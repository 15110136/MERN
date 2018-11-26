import { combineEpics } from 'redux-observable';
import { GET_PRODUCT } from '../../store/actionTypes';
import { getProductSuccess, getProductFail } from './ProductAction';

export const getProductEpic = (action$, store, { getProductService }) => action$.ofType(GET_PRODUCT).switchMap(action => {
    const param = action.payload;
    return getProductService(param)
        .map(res => getProductSuccess(res))
        .catch(err => getProductFail(err));
});

export default combineEpics(getProductEpic);
