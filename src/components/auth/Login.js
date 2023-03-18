import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/action/actions";
import loginCSS from "./login.module.css";

const classes = { ...loginCSS };

export default function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      setError("Please enter a name.");
    } else if (name === "aliraza") {
      dispatch(
        loginAction({
          isLogin_true: true,
        })
      );
    } else {
      setError("Incorrect name entered.");
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
    setError("");
  };

  return (
    <div className={classes.login_page}>
      <div className={classes.form}>
        <form className={classes.login_form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={name}
            onChange={handleChange}
          />
          <button type="submit">login</button>
        </form>
        {error && <div className={classes.error}>{error}</div>}
      </div>
    </div>
  );
}
