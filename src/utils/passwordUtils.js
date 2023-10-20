const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[],|:;<>./?";

export const generateCharacterPool = ({ includeNumbers, includeSymbols }) => {
  if (!includeNumbers && !includeSymbols) return characters.slice(0, 52);
  if (!includeNumbers)
    return [...characters.slice(0, 52), ...characters.slice(62)];
  if (!includeSymbols) return characters.slice(0, 62);
  return characters;
};

export const createPassword = (characterPool, length) => {
  return Array.from(
    { length },
    () => characterPool[Math.floor(Math.random() * characterPool.length)],
  ).join("");
};

export const generatePasswords = ({
  passwordLength,
  includeNumbers,
  includeSymbols,
}) => {
  const characterPool = generateCharacterPool({
    includeNumbers,
    includeSymbols,
  });
  return Array.from({ length: 4 }, () =>
    createPassword(characterPool, passwordLength),
  );
};
