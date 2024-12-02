import React from "react";

const Button = ({ text, onClick, styleType }) => {
  const baseClasses = "px-4 py-2 rounded font-semibold text-white";
  const styleClasses = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      className={`${baseClasses} ${styleClasses[styleType]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
