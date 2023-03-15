import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <p className="text-lg font-poppins font-semibold text-red-600">{message}</p>
  );
};

export default ErrorMessage;
