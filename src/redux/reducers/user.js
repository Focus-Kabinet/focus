import { UserTypes as Types } from '../actions/user';

const initialState = {
    profile: {
        user: '',
        email: '',
        password: '',
        loggedIn:''
    },
}
  
const userReducer = (state = initialState, action) => {
switch (action.type) {
    case Types.LOGIN:
    return {
        ...state,
        profile: action.payload.user,
    }
    case Types.LOGOUT:
    return {
        ...state,
        profile: action.payload.user,
    }
    case Types.ADD_USER:
    return {
        ...state,
        profile: action.payload.user,
    }
    case Types.UPDATE_USER:
    return {
        ...state,
        profile: action.payload.user,
    }
    default:
    return state;
}
}

export default userReducer;