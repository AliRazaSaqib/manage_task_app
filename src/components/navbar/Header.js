import React from "react";
import classes from "./navbar.module.css";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/action/actions";

export default function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(
      logoutAction({
        isLogin_true: false,
      })
    );
  };
  return (
    <div className={classes.navbar}>
      <div>Logo here</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
