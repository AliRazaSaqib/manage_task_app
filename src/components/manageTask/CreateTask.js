import React, { useState } from "react";
import classes from "./task.module.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../redux/action/actions";

export default function CreateTask() {
  const dispatch = useDispatch();
  const showError = useSelector((state) => state.tasks.error);
  const [values, setValues] = useState({ name: "", detail: "" });
  const [error, setError] = useState("");

  // handle onChange event
  const handleChange = (evt) => {
    const value = evt.target.value;
    setValues({
      ...values,
      [evt.target.name]: value,
    });
    setError("");
  };

  const handleSubmitTask = (event) => {
    event.preventDefault();
    if (!values.name || !values.detail) {
      setError("Please fill in all fields");
    } else {
      // submit form
      dispatch(
        createTask({
          id: uuidv4(),
          name: values.name,
          detail: values.detail,
        })
      );
      setError("");
      setValues({ name: "", detail: "" });
    }
  };

  return (
    <>
      <form className={classes.task_form} onSubmit={handleSubmitTask}>
        <input
          type="text"
          placeholder="Task Name..."
          name="name"
          maxLength={30}
          onChange={handleChange}
          value={values.name}
        />
        <input
          type="text"
          placeholder="Details..."
          name="detail"
          maxLength={50}
          onChange={handleChange}
          value={values.detail}
        />
        <button type="submit">Add</button>
      </form>
      {error && <div className={classes.error}>{error}</div>}
      {showError && <div className={classes.error}>{showError}</div>}
    </>
  );
}
