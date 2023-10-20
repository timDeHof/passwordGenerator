import React from "react";

export const Slider = ({ passwordLength, setsPasswordLength }) => {
  return (
    <div id='password-length'>
      <label htmlFor='passwordLength'>
        Password length:
        <span id='passwordLengthText'>{passwordLength}</span>{" "}
      </label>
      <input
        type='range'
        id='passwordLength'
        className='slider'
        min={1}
        max={18}
        step={3}
        value={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
      />
    </div>
  );
};
