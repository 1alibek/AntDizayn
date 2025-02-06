import React from "react";

const Button = ({ children, type = "base" }) => {
  const baseStyle = " py-2 px-4 rounded-md transition duration-300";
  const types = {
    base: baseStyle,
    primary: "bg-blue-500 hover:bg-blue-400  font-bold text-white",

    default:
      "bg-transparent hover:border-2 hover:border-blue-500 text-black font-normal border-2  border-black hover:bg-transparent hover:text-blue-500 ",
    dashed:
      "bg-transparent hover:border-2 hover:border-blue-500 text-black font-normal border-dashed border-2  border-black hover:bg-transparent hover:text-blue-500 ",
  };
  return <button className={`1${baseStyle} ${types[type]}`}>{children}</button>;
};

export default Button;
