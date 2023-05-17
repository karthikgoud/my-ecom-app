import React from "react";

import "./RadioButton.css";

const RadioButton = ({ text }) => {
  return (
    <label>
      <input type="radio" />
      {text}
    </label>
  );
};

export default RadioButton;
