import { CURRENT_USER } from './constant';

export const changeName = (name) => dispatch => {
    dispatch({ type: CURRENT_USER, payload: name });
}