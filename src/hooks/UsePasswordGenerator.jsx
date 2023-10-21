import { useState } from "react";
import { copyToClipboard } from "../utils";

export function UsePasswordGenerator() {
  const [generatedPasswords, setGeneratedPasswords] = useState([]);

  const generatePasswords = (passwords) => {
    setGeneratedPasswords(passwords);
  };

  const copyPasswordToClipboard = async (password) => {
    await copyToClipboard(password);
    alert(`password (${password}) copied to clipboard`);
  };

  return { generatedPasswords, generatePasswords, copyPasswordToClipboard };
}
