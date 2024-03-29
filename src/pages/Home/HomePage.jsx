import React from "react";

const HomePage = () => {
  return (
    <div className="container">
      <div className="shadow p-3 mb-5 bg-body rounded text-center m-5">
        <h1 className="display-1">Fake Blog</h1>
        <p className="lead">
          This is a fake blog powered by{" "}
          <a
            rel="noreferrer"
            href="https://jsonplaceholder.typicode.com/"
            target="_blank"
          >
            JSON placeholder
          </a>
        </p>
        <p className="lead">
          <strong>Important Note from JSON placeholder</strong>: resource will
          not be really updated on the server but it will be faked as if.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
