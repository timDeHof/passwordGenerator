import {
  generateCharacterPool,
  createPassword,
  generatePasswords,
} from "./passwordUtils";

describe("generateCharacterPool", () => {
  test("should return only letters when includeNumbers and includeSymbols are false", () => {
    const pool = generateCharacterPool({
      includeNumbers: false,
      includeSymbols: false,
    });
    expect(pool).toMatch(/^[A-Za-z]+$/);
  });

  test("should return letters and symbols when includeNumbers is false", () => {
    const pool = generateCharacterPool({
      includeNumbers: false,
      includeSymbols: true,
    });
    expect(pool.join("")).toMatch(/^[A-Za-z~`!@#$%^&*()_\-+={}[\],|:;<>./?]+$/);
  });

  test("should return letters, numbers, and symbols when both includeNumbers and includeSymbols are true", () => {
    const pool = generateCharacterPool({
      includeNumbers: true,
      includeSymbols: true,
    });
    expect(pool).toMatch(/^[A-Za-z0-9~`!@#$%^&*()_\-+={}[\],|:;<>./?]+$/);
  });

  test("should return letters and numbers when includeNumbers is true and includeSymbols is false", () => {
    const pool = generateCharacterPool({
      includeNumbers: true,
      includeSymbols: false,
    });
    expect(pool).toMatch(/^[A-Za-z0-9]+$/);
  });
});

describe("createPassword", () => {
  const characterPool = "ABC123";

  test("should create a password of the correct length", () => {
    const password = createPassword(characterPool, 5);
    expect(password).toHaveLength(5);
  });

  test("should create a password from the given character pool", () => {
    const password = createPassword(characterPool, 5);
    expect([...password].every((char) => characterPool.includes(char))).toBe(
      true,
    );
  });

  test("should return an empty string when character pool is empty", () => {
    const password = createPassword("", 5);
    expect(password).toBe("");
  });

  test("should return an empty string when password length is 0", () => {
    const password = createPassword("ABC123", 0);
    expect(password).toBe("");
  });
});

describe("generatePasswords", () => {
  test("should generate the correct number of passwords", () => {
    const passwords = generatePasswords({
      passwordLength: 5,
      includeNumbers: true,
      includeSymbols: true,
    });
    expect(passwords).toHaveLength(4);
  });

  test("should generate passwords of the correct length", () => {
    const passwords = generatePasswords({
      passwordLength: 7,
      includeNumbers: true,
      includeSymbols: true,
    });
    passwords.forEach((password) => {
      expect(password).toHaveLength(7);
    });
  });
});
