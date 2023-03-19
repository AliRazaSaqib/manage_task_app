import classes from "../task.module.css";

export default function ViewDetails({ setShowDetails, rowData }) {
  return (
    <>
      <div
        className={classes.close_button}
        onClick={() => setShowDetails(false)}
      >
        X
      </div>
      <div className={classes.detail_view}>
        <h1>View Details</h1>
        <div className={classes.details}>
          <div>
            <h4>Name</h4>
            <label>{rowData.name}</label>
          </div>
          <div>
            <h4>Detail</h4>
            <label>{rowData.detail}</label>
          </div>
          <div>
            <h4>Status</h4>
            <label>{rowData.status}</label>
          </div>
        </div>
      </div>
    </>
  );
}
