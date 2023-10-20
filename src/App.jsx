import React, { useState } from "react";
import { PasswordGenerator, PasswordList } from "./components";
import { copyToClipboard } from "./utils";

function App() {
  const [generatedPasswords, setGeneratedPasswords] = useState([]);

  const handleGeneratePasswords = (passwords) => {
    setGeneratedPasswords(passwords);
  };

  const handleCopyPassword = async (password) => {
    await copyToClipboard(password);
    alert(`password (${password}) copied to clipboard`);
  };

  return (
    <div id='container'>
      <h1 id='heading1'>Generate a</h1>
      <h2 id='heading2'>random password</h2>
      <h3 id='supporting-text'>Never use an insecure password again.</h3>
      <PasswordGenerator onGenerate={handleGeneratePasswords} />
      <hr />
      <PasswordList
        passwords={generatedPasswords}
        onCopy={handleCopyPassword}
      />
    </div>
  );
}

export default App;
