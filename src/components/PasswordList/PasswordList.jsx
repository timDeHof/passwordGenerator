import React from "react";

export const PasswordList = ({ passwords, onCopy }) => (
  <div className='passwords-container'>
    {passwords.map((password, index) => (
      <div
        className='generatedPassword'
        key={index}
        onClick={() => onCopy(password)}>
        {password}
      </div>
    ))}
  </div>
);
