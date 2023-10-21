import React, { useState } from "react";
import { PasswordGenerator, PasswordList } from "./components";
import UsePasswordGenerator from "./hooks";

function App() {
  const { generatedPasswords, generatePasswords, copyPasswordToClipboard } =
    UsePasswordGenerator();
  return (
    <div id='container'>
      <h1 id='heading1'>Generate a</h1>
      <h2 id='heading2'>random password</h2>
      <h3 id='supporting-text'>Never use an insecure password again.</h3>
      <PasswordGenerator onGenerate={generatePasswords} />
      <hr />
      <PasswordList
        passwords={generatedPasswords}
        onCopy={copyPasswordToClipboard}
      />
    </div>
  );
}

export default App;
