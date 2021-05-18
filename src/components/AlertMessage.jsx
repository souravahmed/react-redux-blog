import React from "react";
import MessageType from "../uitils/MessageTypeUtils";

const AlertMessage = ({ message, messageType }) => {
  const alertClassTypes =
    messageType === MessageType.SUCCESS ? " alert-success" : " alert-danger";
  const alertClasses = `alert ${alertClassTypes} alert-dismissible fade show`;

  return (
    <div className="row">
      <div className={alertClasses}>
        <strong>{messageType}!</strong> {message}.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default AlertMessage;
