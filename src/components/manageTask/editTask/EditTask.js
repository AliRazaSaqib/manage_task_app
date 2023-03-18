import React, { useState, useEffect } from "react";
import classes from "../task.module.css";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../../../redux/action/actions";

export default function EditTask({ setShow, rowData }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ name: "", detail: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (rowData) {
      setValues({
        name: rowData.name,
        detail: rowData.detail,
      });
    }
  }, [rowData]);

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
      dispatch(
        editTask({
          id: rowData.id,
          name: values.name,
          detail: values.detail,
        })
      );
      setError("");
      setValues({ name: "", detail: "" });
      setShow(false);
    }
  };

  return (
    <>
      <div className={classes.close_button} onClick={() => setShow(false)}>
        X
      </div>
      <div className={classes.edit_form}>
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
          <button type="submit">Update</button>
        </form>
        {error && <div className={classes.error}>{error}</div>}
      </div>
    </>
  );
}
