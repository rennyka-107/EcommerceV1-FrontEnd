import React from "react";

const Button1 = ({ additionClass, title, ...props }) => {
  if (!additionClass) {
    additionClass = "";
  }
  return (
    <button
      {...props}
      className={`button-1 btn-1-black ${additionClass}`}
    >
      {title}
    </button>
  );
};

export default Button1;
