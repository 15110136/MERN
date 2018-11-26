import { combineEpics } from 'redux-observable';
import { GET_DETAIL_PRODUCT } from '../../store/actionTypes';
import { getDetailProductSuccess, getDetailProductFail } from './DetailProductAction';

export const getDetailProductEpic = (action$, store, { getDetailProductService }) => action$.ofType(GET_DETAIL_PRODUCT).switchMap(action => {
    const param = action.payload;
    // console.log('>>>>>>>>>>> product ID', param);
    return getDetailProductService(param)
        .map(res => getDetailProductSuccess(res))
        .catch(err => getDetailProductFail(err));
});

export default combineEpics(getDetailProductEpic);
