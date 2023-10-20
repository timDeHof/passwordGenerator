import React from "react";

export const Toggle = ({ label, checked, onChange, id }) => (
  <div className='toggle-wrapper'>
    <label>{label}</label>
    <input
      type='checkbox'
      id={id}
      className='cm-toggle'
      checked={checked}
      onChange={() => onChange(!checked)}
    />
  </div>
);
