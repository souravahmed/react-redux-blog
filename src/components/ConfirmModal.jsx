import React from "react";

const ConfirmModal = ({
  message,
  modalTitle,
  leftButtonText,
  rightButtonText,
  confirmCallBackFun,
}) => {
  return (
    <div
      className="modal fade"
      id="targetModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {modalTitle}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              {leftButtonText}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={confirmCallBackFun}
            >
              {rightButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
