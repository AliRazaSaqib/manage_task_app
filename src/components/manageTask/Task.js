import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreateTask from "./CreateTask";
import classes from "./task.module.css";
import TaskList from "./TaskList";

export default function Task() {
  const [show, setShow] = useState(false);
  const taskList = useSelector((state) => state.tasks);
  return (
    <>
      <div className={classes.Main_container}>
        <div className={classes.container}>
          {/* create task */}
          <div className={classes.add_task}>
            <button onClick={() => setShow(!show)}>Create Task</button>
            <div
              className={`${classes.create_task_container} ${
                show ? classes.show : ""
              }`}
            >
              {show ? <CreateTask /> : null}
            </div>
          </div>
        </div>
        {/* task list */}
        {taskList.tasks.length ? (
          <>
            <h2>Task List</h2>
            <div className={classes.task_list}>
              <TaskList />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
