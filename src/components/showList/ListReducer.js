import { handleActions } from 'redux-actions';
import {
    GET_USERS_SUCCESS,
} from '../../store/actionTypes';

const initialState = {
    dataUsers: [],
};

const actions = {
    [GET_USERS_SUCCESS]: (state, { payload }) => ({
        ...state,
        dataUsers: payload.data,
    }),
};

export default handleActions(actions, initialState);
