import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

export default function NotFound() {
  return (
    <div className={classes.error_container}>
      <img src="https://i.ibb.co/W6tgcKQ/softcodeon.gif" />
      <h1 className={classes.error_text}>
        Whoops, We can't seem to find the resource you're looking for.
      </h1>
      <p className={classes.text}>
        Please check that the Web site address is spelled correctly.Or,
      </p>

      <Link className={classes.move_back} to="/">
        Go to Homepage
      </Link>
    </div>
  );
}
