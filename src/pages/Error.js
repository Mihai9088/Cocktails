import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page section">
      <div className="error-container">
        <h1>nu mere</h1>
        <Link to="/" className="btn btn-primary">
          HOME
        </Link>
      </div>
    </div>
  );
};

export default Error;
