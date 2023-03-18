import { CREATETASK, EDITTASK, DELETETASK, LOGIN, LOGOUT } from "./actionTypes";

//// for login /////
export const loginAction = ({ isLogin_true }) => ({
  type: LOGIN,
  payload: {
    isLogin_true,
  },
});

export const logoutAction = () => ({
  type: LOGOUT,
});

//// for task manager /////
export const createTask = ({ id, name, detail, status = "pending" }) => ({
  type: CREATETASK,
  payload: {
    id,
    name,
    detail,
    status,
  },
});

export const editTask = ({ id, name, detail, status }) => ({
  type: EDITTASK,
  payload: {
    id,
    name,
    detail,
    status,
  },
});

export const deleteTask = (id) => ({
  type: DELETETASK,
  payload: {
    id,
  },
});
