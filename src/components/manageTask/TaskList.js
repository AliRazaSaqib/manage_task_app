import React, { useState } from "react";
import classes from "./task.module.css";
import del from "../../assets/delete.png";
import edit from "../../assets/edit.png";
import details from "../../assets/details.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editStatus } from "../../redux/action/actions";
import EditTask from "./editTask/EditTask";
import ViewDetails from "./viewDetails/ViewDetails";

export default function TaskList() {
  const taskList = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [rowData, setRowData] = useState();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (task) => {
    setRowData(task);
  };

  const handleStatusChange = (id, status) => {
    dispatch(editStatus({ id, status }));
  };

  return (
    <div>
      <ul className={classes.user_list}>
        {taskList?.tasks?.map((el, _) => (
          <li key={el.id}>
            <span className={classes.user_name}>{el.name}</span>
            <span
              className={`${classes.user_name} ${
                el.status === "pending"
                  ? classes.statusPending
                  : classes.statusDone
              }`}
            >
              {el.status}
            </span>
            <div className={classes.user_actions}>
              <button
                onClick={() =>
                  handleStatusChange(
                    el.id,
                    el.status === "pending" ? "done" : "pending"
                  )
                }
              >
                {el.status === "pending" ? "Mark as Done" : "Mark as Pending"}
              </button>
              <img src={del} onClick={() => handleDelete(el.id)} />
              <img
                src={edit}
                onClick={() => {
                  handleEdit(el);
                  setShow(true);
                }}
              />
              <img
                src={details}
                height={26}
                onClick={() => {
                  setRowData(el);
                  setShowDetails(true);
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      {show ? (
        <div className={classes.edit_task_overlay}>
          <EditTask setShow={setShow} rowData={rowData} />
        </div>
      ) : showDetails ? (
        <div className={classes.edit_task_overlay}>
          <ViewDetails setShowDetails={setShowDetails} rowData={rowData} />
        </div>
      ) : null}
    </div>
  );
}
