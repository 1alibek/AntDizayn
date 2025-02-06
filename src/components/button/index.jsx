import React from 'react'

const Button = ({children,type="primary"}) => {
      const baseStyle =
        "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md transition duration-300";
      const types = {
        primary: baseStyle,
        default:
          "bg-transparent hover:border-1 hover:border-blue-500 !text-black font-normal border-1  border-black !hover:text-blue-500 ",
        danger:
          "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded-md transition duration-300",
      };
  return <button className={`1${baseStyle} ${types[type]}`}>{children}</button>;
}

export default Button