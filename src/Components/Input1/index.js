import React from "react";

const Input1 = ({ style, additionClassName, ...props }) => {
  return (
    <div className={additionClassName}>
      <input {...props} className="input-1" />
    </div>
  );
};

export default Input1;
