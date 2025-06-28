import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-4xl text-center font-medium text-primary-dull">
        <span className="text-7xl bg-gradient-to-r from-white via-primary-dull to-primary text-transparent bg-clip-text">Error 404</span> <br />
        <span>Page Not Found!</span>
      </h1>
    </div>
  );
};

export default NotFound;
