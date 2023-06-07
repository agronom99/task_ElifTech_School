import React from "react";

const Input = () => {
  return (
    <div className="input">
      <ul>
        <li>
          <b>Name:</b>
          <input type="text" placeholder="input" />
        </li>
        <li>
          <b>Email:</b>
          <input type="text" placeholder="input"/>
        </li>
        <li>
          <b>Phone:</b>
          <input type="text" placeholder="input"/>
        </li>
        <li>
          <b>Address:</b>
          <input type="text" placeholder="input"/>
        </li>
      </ul>
    </div>
  );
};

export default Input;
