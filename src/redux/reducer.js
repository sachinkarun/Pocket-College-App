import * as types from './constant';

const initialState = {
    currentUser: "user123"
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case types.CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload,
            }
        default:
            return state;
    }
}

export default userReducer;