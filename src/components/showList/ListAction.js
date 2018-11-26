import { createAction } from 'redux-actions';
import {
    GET_USERS,
    GET_USERS_SUCCESS,
} from '../../store/actionTypes';

export const getUsers = createAction(GET_USERS);
export const getUsersSuccess = createAction(GET_USERS_SUCCESS);
