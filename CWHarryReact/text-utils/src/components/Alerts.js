import React from "react";

const Alerts = (props) => {
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.at(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props?.alert?.type)}</strong>:{" "}
        {props?.alert?.message}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    )
  );
};

export default Alerts;
