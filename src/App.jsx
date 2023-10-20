import { useState } from "react";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[],|:;<>./?".split(
    "",
  );
function App() {
  const [passwordLength, setPasswordLength] = useState(14);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPasswords, setGeneratedPasswords] = useState([]);

  const checkCheckboxes = () => {
    const numbers = includeNumbers ? characters.slice(0, 62) : "";
    const symbols = includeSymbols
      ? [...characters.slice(0, 52), ...characters.slice(62, 91)]
      : "";
    return numbers + symbols || characters.slice(0, 52);
  };

  const createPassword = () => {
    const chars = checkCheckboxes();
    return Array(passwordLength)
      .fill()
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("");
  };

  const generatePasswords = () => {
    setGeneratedPasswords(Array.from({ length: 4 }).map(createPassword));
  };

  const copyText = async (password) => {
    await navigator.clipboard.writeText(password);
    alert(`Text (${password}) copied to clipboard`);
  };

  return (
    <div id='container'>
      <h1 id='heading1'>Generate a</h1>
      <h2 id='heading2'>random password</h2>
      <h3 id='supporting-text'>Never use an insecure password again.</h3>
      <div id='settings-container'>
        <div id='password-length'>
          <label htmlFor='passwordLength'>
            Password length:
            <span id='passwordLengthText'>{passwordLength}</span>{" "}
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
        <div className='toggle-wrapper'>
          <label htmlFor='number'>Include Numbers</label>
          <input
            type='checkbox'
            id='number'
            className='cm-toggle'
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
        </div>
        <div className='toggle-wrapper'>
          <label htmlFor='symbol'>Include Symbols</label>
          <input
            type='checkbox'
            id='symbol'
            className='cm-toggle'
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
        </div>
      </div>

      <button id='btn' onClick={generatePasswords}>
        <p id='button-text'>Generate passwords</p>
      </button>
      <hr />
      <div className='passwords-container'>
        {generatedPasswords.map((password, index) => (
          <div
            id='generatedPassword'
            key={index}
            onClick={() => copyText(password)}>
            {password}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
