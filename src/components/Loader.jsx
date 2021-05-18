import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-grow text-info"
        role="status"
        style={{ height: "300px", width: "300px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
