import { LOGIN, LOGOUT } from "../action/actionTypes";

const initialState = {
  isLogin_true: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default authReducer;
