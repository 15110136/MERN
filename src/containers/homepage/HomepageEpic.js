import { combineEpics } from 'redux-observable';
import { GET_NEW_PRODUCT } from '../../store/actionTypes';
import { getNewProductSuccess, getNewProductFail } from './HomepageAction';

export const getNewProductEpic = (action$, store, { getNewProductsService }) => action$.ofType(GET_NEW_PRODUCT).switchMap(() => getNewProductsService()
    .map(res => getNewProductSuccess(res))
    .catch(err => getNewProductFail(err)));

export default combineEpics(getNewProductEpic);
