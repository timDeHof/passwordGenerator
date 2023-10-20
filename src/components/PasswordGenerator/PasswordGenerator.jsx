import React, { useState } from "react";
import Toggle from "../Toggle";
import { generatePasswords } from "../../utils";

export const PasswordGenerator = ({ onGenerate }) => {
  const [passwordLength, setPasswordLength] = useState(15);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const handleGeneratePasswords = () => {
    const passwords = generatePasswords({
      passwordLength,
      includeNumbers,
      includeSymbols,
    });
    onGenerate(passwords);
  };

  return (
    <div id='settings-container'>
      <div id='password-length'>
        <label htmlFor='passwordLength'>
          Password length: <span id='passwordLengthText'>{passwordLength}</span>
        </label>
        <input
          type='range'
          id='passwordLength'
          className='slider'
          min='1'
          max='18'
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>
      <Toggle
        label='Include Numbers'
        id='number'
        checked={includeNumbers}
        onChange={setIncludeNumbers}
      />
      <Toggle
        label='Include Symbols'
        id='symbol'
        checked={includeSymbols}
        onChange={setIncludeSymbols}
      />
      <button id='btn' onClick={handleGeneratePasswords}>
        <p id='button-text'>Generate passwords</p>
      </button>
    </div>
  );
};
