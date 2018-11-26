import { combineEpics } from 'redux-observable';
import { GET_USERS } from '../../store/actionTypes';
import { getUsersSuccess } from './ListAction';

export const getUsersEpic = (action$, store, { getUsersService }) => action$.ofType(GET_USERS).switchMap(() => getUsersService()
    .map(res => getUsersSuccess(res))
    .catch(err => console.log('>>>>>>>>> err', err)));

export default combineEpics(getUsersEpic);
